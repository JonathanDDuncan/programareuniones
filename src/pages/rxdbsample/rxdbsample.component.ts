import {Component} from '@angular/core';
// import RxDocument from 'rxjs';
import {RxDocument} from "rxdb";

declare var require: any;

@Component({
    templateUrl: './rxdbsample.component.html',
    styles: [ './rxdbsample.component.less' ],
}) 
export class RXDBSampleComponent {

    editedHero: RxDocument;

    constructor() { }
    ngOnInit() { }

    editHero(hero) {
        this.editedHero = hero;
    }
}
