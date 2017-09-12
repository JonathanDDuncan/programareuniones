import { ModalController, NavParams } from 'ionic-angular';
import { Component, OnInit, OnDestroy, NgZone, Output, EventEmitter } from '@angular/core';
import { ProgramaDatabaseService } from '../../services/programadatabase.service';
// import { consejoNewEditComponent } from '../../pages/consejoedit/consejoedit.component';


import { Platform, ViewController, ActionSheetController } from 'ionic-angular';
import * as RxDBTypes from '../../schemas/RxProgramaDB.d';
declare var require: any;
@Component({
  selector: 'consejos-list',
  templateUrl: './consejos-list.component.html',
  styles: ['./consejos-list.component.less'],
  providers: [ProgramaDatabaseService]
})
export class ConsejosListComponent implements OnInit, OnDestroy {


  consejos: RxDBTypes.RxConsejoDocument[] | RxDBTypes.RxConsejoDocument;
  sub;

  @Output('edit') editChange: EventEmitter<RxDBTypes.RxConsejoDocument> = new EventEmitter();
  set edit(consejo) {
    debugger;
    // console.log('editconsejo: ' + consejo.name);
    // this.editChange.emit(consejo);
  }
  editconsejo(consejo) {
    // this.edit = consejo;

    // let modal = this.modalCtrl.create(ConsejoNewEditComponent, { consejo1: consejo });
    // modal.present();
  }
  deleteconsejo(consejo) {
    if (confirm("Esta seguro quiere borrar consejo " + consejo.name + "?")) {
      consejo.remove();
    }
  }

  openModal(characterNum) {

    // let modal = this.modalCtrl.create(ConsejoNewEditComponent, characterNum);
    // modal.present();
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
    const consejos$ = db.consejos
      .find()
      .sort({ id: 1 })
      .$;
    this.sub = consejos$.subscribe(consejos => {
      this.consejos = consejos;
      this.zone.run(() => { });
    });
  }

  ngOnInit() {
    this._show();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  displayDate(date:number ){
    var d = new Date(date);
   return d.toLocaleString();
  }
}
