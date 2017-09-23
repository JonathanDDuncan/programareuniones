import { Component } from '@angular/core';
// import RxDocument from 'rxjs';
import { RxDocument } from "rxdb";
import { SemanaInsertComponent } from '../../pages/semanainsert/semanainsert.component';
import { ModalController, NavParams } from 'ionic-angular';

declare var require: any;

@Component({
  templateUrl: './rxdbsemana.component.html',
  styles: ['./rxdbsemana.component.less'],
})
export class RXDBSemanaComponent {

  constructor(public modalCtrl: ModalController) { }
  ngOnInit() { }

  insertSemana() {
    let modal = this.modalCtrl.create(SemanaInsertComponent);
    modal.present();
  }
}
