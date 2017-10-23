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
  myData: any;

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
    this.semana = params.get('semana');
    this.myData=[{value: "1", text: "Option 1"},{value: "2", text: "Option 2"}];
  
   
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  compareFn(option1: any, option2: any) {
 
    return option1 === option2;
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
