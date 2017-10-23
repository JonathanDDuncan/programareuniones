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

  semana =
  {
    classname: "Semana",
    singular: "semana",
    plural: "semanas",
    schema: require('../../schemas/semana.schema.json')
  };
  scaffolding = [this.semana]

  dropdown(key: string) {
    debugger;
    return this.choosecontrol("dropdown", key);
  }
  label(key: string) {
    debugger;
    return this.choosecontrol("label", key);

  }
  defaultcontrol(key: string) {
    debugger;
    return this.choosecontrol("default", key)
  }
  textinput(key: string) {
    debugger;
    return this.choosecontrol("default", key)
  }

  choosecontrol(caller: string, key: string) {
    var showon = "";

    if (key.endsWith("id") && key != "id") {
      showon = "dropdown"
    } else if ((key.endsWith("name") && key != "name") || key == "id") {
      showon = "label"
    }
    else
      showon = "textinput"

    return (caller == showon);
  }
}





