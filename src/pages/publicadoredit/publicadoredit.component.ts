import { ModalController, NavParams, Platform, ViewController } from 'ionic-angular';
import { Component, ViewChildren, Input, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';
// import RxDocument from 'rxjs';
import { RxDocument } from "rxdb";
import { ProgramaDatabaseService } from '../../services/programadatabase.service';
declare var require: any;

@Component({
    templateUrl: './publicadoredit.component.html',
    styles: ['./publicadoredit.component.less'],
})
export class PublicadorNewEditComponent {
    character;
    editedPublicador: RxDocument;

    ngOnInit() { }

    // editPublicador(publicador) {
    //     this.editedPublicador = publicador;
    // }

    @Input('publicador') publicador: any;
    @Output('done') done = new EventEmitter();

    constructor(private databaseService: ProgramaDatabaseService,
        public platform: Platform, private params: NavParams,

        public viewCtrl: ViewController
    ) {
         
        this.publicador = params.get('publicador1')
       
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    async submit() {
        await this.publicador.save();
        this.done.emit(true);
        this.viewCtrl.dismiss();
    }

    async cancel() {
        this.publicador.resync();
        this.done.emit(false);
        this.viewCtrl.dismiss();
    }
}
