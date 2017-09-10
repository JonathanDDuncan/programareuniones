import { Component, ViewChild, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import * as randomInt from 'random-int';
declare var require: any;
@Component({
    selector: 'publicador-insert',
    templateUrl: './publicador-insert.component.html',
    styles: ['./publicador-insert.component.less'],
    providers: [DatabaseService]
})
export class PublicadorInsertComponent implements OnInit {

    @ViewChild('input') inputfield;

    tempDoc: any;

    constructor(
        private databaseService: DatabaseService
    ) { }

    async ngOnInit() {
        await this.reset();
    }

    async reset() {
        const db = await this.databaseService.get();
        this.tempDoc = db.hero.newDocument({
            maxHP: randomInt(100, 1000)
        });
    }

    async submit() {
        console.log('HeroInsertComponent.submit():');
        console.log('name: ' + this.tempDoc.name);
        console.log('color: ' + this.tempDoc.color);

        try {
            await this.tempDoc.save();
            await this.reset();
        } catch (err) {
            alert('Error: Please check console');
            console.error('hero-insert.submit(): error:');
            throw err;
        }

        this.inputfield.nativeElement.focus();
    }


}
