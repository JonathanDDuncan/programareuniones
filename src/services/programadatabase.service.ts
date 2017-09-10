import { Injectable } from '@angular/core';
// import 'babel-polyfill';    
// batteries-included
// import RxDB from 'rxdb';

/**
 * custom build
 */
import RxDB from 'rxdb/dist/es/core';
declare var require: any;
 

// import modules
import RxDBSchemaCheckModule from 'rxdb/dist/es/modules/schema-check';
// if (ENV === 'development') {
 if (true) {
    // schema-checks should be used in dev-mode only
    RxDB.plugin(RxDBSchemaCheckModule);
}

import RxDBValidateModule from 'rxdb/dist/es/modules/validate';
RxDB.plugin(RxDBValidateModule);
import RxDBLeaderElectionModule from 'rxdb/dist/es/modules/leader-election';
RxDB.plugin(RxDBLeaderElectionModule);


// always needed for replicatin with the node-server
RxDB.plugin(require('pouchdb-adapter-http'));
RxDB.plugin(require('pouchdb-replication'));

// import typings
import * as RxDBTypes from '../schemas/RxProgramaDB.d';

RxDB.QueryChangeDetector.enable();
RxDB.QueryChangeDetector.enableDebugging();

const adapters = {
    localstorage: require('pouchdb-adapter-localstorage'),
    websql: require('pouchdb-adapter-websql'),
    idb: require('pouchdb-adapter-idb')
};

const useAdapter = 'idb';
RxDB.plugin(adapters[useAdapter]);

let collections = [
    {
        name: 'publicadores',
        schema: require('../schemas/programa.schema.json'),
        methods: {
            hpPercent() {
                return this.hp / this.maxHP * 100;
            }
        },
        sync: true
    }
];

console.log('hostname: ' + window.location.hostname);
const syncURL = 'http://' + window.location.hostname + ':10101/';

let doSync = true;
if (window.location.hash == '#nosync') doSync = false;

@Injectable()
export class ProgramaDatabaseService {
    static dbPromise: Promise<RxDBTypes.RxProgramasDatabase> = null;
    private async _create(): Promise<RxDBTypes.RxProgramasDatabase> {
        console.log('DatabaseService: creating database..');
        const db: RxDBTypes.RxProgramasDatabase = await RxDB.create({
            name: 'programa',
            adapter: useAdapter,
            // password: 'myLongAndStupidPassword' // no password needed
        });
        console.log('DatabaseService: created database');
        window['db'] = db; // write to window for debugging

        // show leadership in title
        db.waitForLeadership()
            .then(() => {
                console.log('isLeader now');
                document.title = '♛ ' + document.title;
            });

        // create collections
        console.log('DatabaseService: create collections');
        await Promise.all(collections.map(colData => db.collection(colData)));

        // hooks
        console.log('DatabaseService: add hooks');
        db.collections.publicadores.preInsert(function(docObj) {
            const color = docObj.color;
            return db.collections.publicadores.findOne({ color }).exec()
                .then(has => {
                    if (has != null) {
                        alert('another hero already has the color ' + color);
                        throw new Error('color already there');
                    }
                    return db;
                });
        });

        // sync
        console.log('DatabaseService: sync');
        collections
            .filter(col => col.sync)
            .map(col => col.name)
            .forEach(colName => db[colName].sync({ remote: syncURL + colName + '/' }));

        return db;
    }

    get(): Promise<RxDBTypes.RxProgramasDatabase> {
        if (ProgramaDatabaseService.dbPromise)
            return ProgramaDatabaseService.dbPromise;

        // create database
        ProgramaDatabaseService.dbPromise = this._create();
        return ProgramaDatabaseService.dbPromise;
    }
}
