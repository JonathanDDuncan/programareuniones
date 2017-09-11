import { ModalController, NavParams} from 'ionic-angular';
import { Component, OnInit, OnDestroy, NgZone, Output, EventEmitter } from '@angular/core';
import { ProgramaDatabaseService } from '../../services/programadatabase.service';
import { PublicadorNewEditComponent } from '../../pages/publicadoredit/publicadoredit.component';
 

import {   Platform,  ViewController } from 'ionic-angular';
import * as RxDBTypes from '../../schemas/RxProgramaDB.d';
declare var require: any;
@Component({
    selector: 'publicadores-list',
    templateUrl: './publicadores-list.component.html',
    styles: ['./publicadores-list.component.less'],
    providers: [ProgramaDatabaseService]
})
export class PublicadoresListComponent implements OnInit, OnDestroy {


    publicadores: RxDBTypes.RxPublicadorDocument[] | RxDBTypes.RxPublicadorDocument;
    sub;

    @Output('edit') editChange: EventEmitter<RxDBTypes.RxPublicadorDocument> = new EventEmitter();
    set edit(publicador) {
        debugger;
        // console.log('editPublicador: ' + publicador.name);
        // this.editChange.emit(publicador);
    }
    editPublicador(publicador) {
        // this.edit = publicador;
        debugger;
        let modal = this.modalCtrl.create(PublicadorNewEditComponent, {publicador1: publicador});
        modal.present();
    }
    deletePublicador(publicador) {
        publicador.remove();
    }

    openModal(characterNum) {
        
            let modal = this.modalCtrl.create(PublicadorNewEditComponent, characterNum);
            modal.present();
          }
    constructor(
        private databaseService: ProgramaDatabaseService,
        private zone: NgZone,
        public modalCtrl: ModalController
    ) {
    }

    ngAfterContentInit() { }

    private async _show() {
        const db = await this.databaseService.get();
        const publicadores$ = db.publicadores
            .find()
            .sort({ name: 1 })
            .$;
        this.sub = publicadores$.subscribe(publicadores => {
            this.publicadores = publicadores;
            this.zone.run(() => { });
        });
    }

    ngOnInit() {
        this._show();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
