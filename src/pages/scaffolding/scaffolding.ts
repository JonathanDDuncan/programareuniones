import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ValuesPipe } from '../../components/pipes/pipes'
declare var require: any;

@Component({
  selector: 'scaffolding',
  templateUrl: 'scaffolding.html'
})
export class ScaffoldingPage {

  constructor(public navCtrl: NavController) {


  }

  publicadores =
  {
    classname: "Publicador",
    singular: "publicador",
    plural: "publicadores",
    schema: require('../../schemas/publicador.schema.json')
  };

  Required(arr, text, primary) {
    return !(arr.indexOf(text) > -1) && !primary;
  }

  consejo =
  {
    classname: "Consejo",
    singular: "consejo",
    plural: "consejos",
    schema: require('../../schemas/consejo.schema.json')
  };

  scaffolding = [this.publicadores, this.consejo]

}





