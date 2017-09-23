import { ModalController, NavParams, Platform, ViewController } from 'ionic-angular';
import { Component, ViewChildren, Input, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';
// import RxDocument from 'rxjs';
import { RxDocument } from "rxdb";
import { ProgramaDatabaseService } from '../../services/programadatabase.service';
declare var require: any;
 
@Component({
  templateUrl: './semanaedit.component.html',
  styles: ['./semanaedit.component.less'],
})
export class SemanaEditComponent {
  character;
  editedSemana: RxDocument;

  ngOnInit() { }

  editSemana(semana) {
       this.editedSemana = semana;
   }

  @Input('semana') semana: any;
  @Output('done') done = new EventEmitter();

  constructor(private databaseService: ProgramaDatabaseService,
    public platform: Platform, private params: NavParams,

    public viewCtrl: ViewController
  ) {
    this.semana = params.get('semana')
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  async submit() {
    this.semana.modificado = this.databaseService.getDate();
    await this.semana.save();
    this.done.emit(true);
    this.viewCtrl.dismiss();
  }

  async cancel() {
    this.semana.resync();
    this.done.emit(false);
    this.viewCtrl.dismiss();
  }

  displayDate(date:number ){
    var d = new Date(date);
   return d.toLocaleString();
  }
}
