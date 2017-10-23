import { ModalController, NavParams } from 'ionic-angular';
import { Component, OnInit, OnDestroy, NgZone, Output, EventEmitter } from '@angular/core';
import { ProgramaDatabaseService } from '../../services/programadatabase.service';
import { SemanaEditComponent } from '../../pages/semanaedit/semanaedit.component';


import { Platform, ViewController, ActionSheetController } from 'ionic-angular';
import * as RxDBTypes from '../../schemas/RxProgramaDB.d';
declare var require: any;
@Component({
  selector: 'semanas-list',
  templateUrl: './semanas-list.component.html',
  styles: ['./semanas-list.component.less'],
  providers: [ProgramaDatabaseService]
})
export class SemanasListComponent implements OnInit, OnDestroy {


  semanas: RxDBTypes.RxSemanaDocument[] | RxDBTypes.RxSemanaDocument;
  sub;

  @Output('edit') editChange: EventEmitter<RxDBTypes.RxSemanaDocument> = new EventEmitter();
  set edit(semana) {
   
    console.log('editSemana: ' + semana.id);
    this.editChange.emit(semana);
  }
  editSemana(semana) {
   let modal = this.modalCtrl.create(SemanaEditComponent, { semana: semana });
    modal.present();
  }
  deleteSemana(semana) {
    if (confirm("Esta seguro quiere borrar publicador " + semana.id + "?")) {
      semana.remove();
    }
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
    const semanas$ = db.semanas
      .find()
      .sort({ id: 1 })
      .$;
    this.sub = semanas$.subscribe(semanas => {
      this.semanas = semanas;
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

  compareFn(option1: any, option2: any) {
    debugger;
    return option1 === option2;
  }
}
