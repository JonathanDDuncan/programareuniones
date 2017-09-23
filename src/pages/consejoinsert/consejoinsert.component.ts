import { ModalController, NavParams, Platform, ViewController } from 'ionic-angular';
import { Component, ViewChild, ViewChildren, Input, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';
// import RxDocument from 'rxjs';
import { RxDocument } from "rxdb";
import * as RxDBTypes from '../../schemas/RxProgramaDB.d';

import { ProgramaDatabaseService } from '../../services/programadatabase.service';
import * as uuid from 'uuid/v4';

declare var require: any;

@Component({
  templateUrl: './consejoinsert.component.html',
  styles: ['./consejoinsert.component.less'],
  providers: [ProgramaDatabaseService]
})
export class ConsejoInsertComponent {

  search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].id === nameKey) {
            return myArray[i];
        }
    }
}

  tempDoc: any;
  puntosconsejo: [{num:number, nombre:string}];
  publicadores: RxDBTypes.RxPublicadorDocument[] | RxDBTypes.RxPublicadorDocument;
  sub;
  constructor(
    private databaseService: ProgramaDatabaseService,
    public viewCtrl: ViewController
  ) { }
  @Output('done') done = new EventEmitter();
  async ngOnInit() {
    await this.reset();
  }
  async reset() {
    const db = await this.databaseService.get();
    this.tempDoc = db.consejos.newDocument(this.databaseService.defaultConsejo(uuid()));


    const publicadores$ = db.publicadores
      .find()
      .sort({ id: 1 })
      .$;
    this.sub = publicadores$.subscribe(publicadores => {
      this.publicadores = publicadores;
    });

    this.puntosconsejo = require('../../json/puntosconsejo.json');

  }
  async cancel() {
    this.tempDoc.resync();
    this.done.emit(false);
    this.viewCtrl.dismiss();
  }
  async BorrarFecha() {
    this.tempDoc.fechaasignado = null;
  }
  async submit() {
    console.log('ConsejoInsertComponent.submit():');

    console.log('tempDoc: ' + JSON.stringify(this.tempDoc));
    try {
      
      this.tempDoc.leccion = parseInt( this.tempDoc.leccion);
      let publicador = this.search( this.tempDoc.publicadorid, this.publicadores)
      if (publicador)
        this.tempDoc.nombre = publicador.name;

      await this.tempDoc.save();
      await this.reset();
      this.done.emit(true);
      this.viewCtrl.dismiss();
    } catch (err) {
      alert('Error: Please check console');
      console.error('consejo-insert.submit(): error:');

      throw err;
    }


  }

  displayDate(date: number) {
    var d = new Date(date);
    return d.toLocaleString();
  }

}
