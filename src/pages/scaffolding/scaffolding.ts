import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Ng2SmartTableModule } from 'ng2-smart-table';
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
    plural: "publicadores",
    schema: require('../../schemas/publicador.schema.json')
  };

  Required(arr, text, primary) {
    return !(arr.indexOf(text) > -1) && !primary;
  }

  consejo =
  {
    classname: "Consejo",
    plural: "consejos",
    schema:
    {
      "title": "consejos schema",
      "description": "describes a simple consejos",
      "version": 0,
      "disableKeyCompression": true,
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "primary": true,
          "default": ""
        },
        "consejo": {
          "type": "number",
          "default": 0,
          "required": true
        }
      },
      "required": ["consejo"]
    }
  };

  scaffolding = [this.publicadores, this.consejo]


  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      oracion1: {
        title: 'Oracion1',
        editor: { type: 'checkbox' }
      },
      oracion2: {
        title: 'Oracion2',
        editor: { type: 'checkbox' }
      },
      presidentesabado: {
        title: 'Presidente Sabado',
        editor: { type: 'checkbox' }
      },
      discurso1: {
        title: 'Discurso 1',
        editor: { type: 'checkbox' }
      },
      lecturabiblia: {
        title: 'Lectura Biblia',
        editor: { type: 'checkbox' }
      },
      primeraconversacion: {
        title: 'Primera conversacion',
        editor: { type: 'checkbox' }
      },
      revisita: {
        title: 'Revisita',
        editor: { type: 'checkbox' }
      },
      cursobiblico: {
        title: 'CursoBiblico',
        editor: { type: 'checkbox' }
      },
      ayudante: {
        title: 'Ayudante',
        editor: { type: 'checkbox' }
      },
      smmdiscurso: {
        title: 'Discurso Seamos mejores maestros',
        editor: { type: 'checkbox' }
      },
      nvc1: {
        title: 'NVC 1',
        editor: { type: 'checkbox' }
      },
      nvc2: {
        title: 'NVC 2',
        editor: { type: 'checkbox' }
      },
      estudiocongregacion: {
        title: 'Estudio congregación',
        editor: { type: 'checkbox' }
      },
      presidentedomingo: {
        title: 'Presidente Domingo',
        editor: { type: 'checkbox' }
      },
      lectorestudiocongregacion: {
        title: 'Lector Estudio congregación',
        editor: { type: 'checkbox' }
      },
      lectoreatalaya: {
        title: 'Lector Atalaya',
        editor: { type: 'checkbox' }
      },
      camara: {
        title: 'Camara',
        editor: { type: 'checkbox' }
      },
      aparatos: {
        title: 'Aparatos',
        editor: { type: 'checkbox' }
      },
      cronometro: {
        title: 'Cronómetro',
        editor: { type: 'checkbox' }
      },

    }
  };

  // SaveData(){
  //   console.log(JSON.stringify(this.data));
  // }
}





