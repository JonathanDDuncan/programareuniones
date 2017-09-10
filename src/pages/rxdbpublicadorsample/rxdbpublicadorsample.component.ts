import {Component} from '@angular/core';
// import RxDocument from 'rxjs';
import {RxDocument} from "rxdb";

declare var require: any;

@Component({
    templateUrl: './rxdbpublicadorsample.component.html',
    styles: [ './rxdbpublicadorsample.component.less' ],
}) 
export class RXDBPublicadorSampleComponent {

    editedHero: RxDocument;

    constructor() { }
    ngOnInit() { }

    editHero(hero) {
        this.editedHero = hero;
    }
}
