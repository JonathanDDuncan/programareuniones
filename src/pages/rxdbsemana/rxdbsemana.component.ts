import { Component } from '@angular/core';
// import RxDocument from 'rxjs';
import { RxDocument } from "rxdb";
import { PublicadorNewInsertComponent } from '../../pages/publicadorinsert/publicadorinsert.component';
import { ModalController, NavParams } from 'ionic-angular';

declare var require: any;

@Component({
  templateUrl: './rxdbsemana.component.html',
  styles: ['./rxdbsemana.component.less'],
})
export class RXDBSemanaComponent {

  // editedHero: RxDocument;

  constructor(public modalCtrl: ModalController) { }
  ngOnInit() { }

  // editHero(hero) {
  //   this.editedHero = hero;
  // }

  // insertPublicador() {
  //   let modal = this.modalCtrl.create(PublicadorNewInsertComponent);
  //   modal.present();
  // }
}
