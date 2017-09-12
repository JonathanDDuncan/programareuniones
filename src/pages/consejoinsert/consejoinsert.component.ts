import { ModalController, NavParams, Platform, ViewController } from 'ionic-angular';
import { Component, ViewChild, ViewChildren, Input, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';
// import RxDocument from 'rxjs';
import { RxDocument } from "rxdb";
import { ProgramaDatabaseService } from '../../services/programadatabase.service';
import * as uuid from 'uuid/v4';

declare var require: any;

@Component({
  templateUrl: './consejoinsert.component.html',
  styles: ['./consejoinsert.component.less'],
  providers: [ProgramaDatabaseService]
})
export class ConsejoInsertComponent {

  tempDoc: any;

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
  }
  async cancel() {
    this.tempDoc.resync();
    this.done.emit(false);
    this.viewCtrl.dismiss();
  }
  async submit() {
    console.log('ConsejoInsertComponent.submit():');
    // console.log('name: ' + this.tempDoc.name);
    // console.log('age: ' + this.tempDoc.age);
    console.log('tempDoc: ' + JSON.stringify(this.tempDoc));
    try {

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

  displayDate(date:number ){
    var d = new Date(date);
   return d.toLocaleString();
  }

}
