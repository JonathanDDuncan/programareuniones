import { Component, ViewChild, OnInit } from '@angular/core';
import { ProgramaDatabaseService } from '../../services/programadatabase.service';

import * as randomInt from 'random-int';
declare var require: any;
@Component({
    selector: 'publicador-insert',
    templateUrl: './publicador-insert.component.html',
    styles: ['./publicador-insert.component.less'],
    providers: [ProgramaDatabaseService]
})
export class PublicadorInsertComponent implements OnInit {

    @ViewChild('input') inputfield;

    tempDoc: any;

    constructor(
        private databaseService: ProgramaDatabaseService
    ) { }

    async ngOnInit() {
        await this.reset();
    }

    async reset() {
        const db = await this.databaseService.get();
        this.tempDoc = db.publicadores.newDocument({
           
        });
    }

    async submit() {
        console.log('PublicadorInsertComponent.submit():');
        console.log('name: ' + this.tempDoc.name);
        console.log('color: ' + this.tempDoc.color);

        try {
            debugger;
            await this.tempDoc.save();
            await this.reset();
        } catch (err) {
            alert('Error: Please check console');
            console.error('publicador-insert.submit(): error:');
            throw err;
        }

        this.inputfield.nativeElement.focus();
    }


}
