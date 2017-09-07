import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'page-publicadores',
  templateUrl: 'publicadores.html'
})
export class PublicadoresPage {

  constructor(public navCtrl: NavController) { 

    
  }

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
        editor: {type : 'checkbox'}
      },
      oracion2: {
        title: 'Oracion2',
        editor: {type : 'checkbox'}
      },
      presidentesabado: {
        title: 'Presidente Sabado',
        editor: {type : 'checkbox'}
      },
      discurso1: {
        title: 'Discurso 1',
        editor: {type : 'checkbox'}
      },
      lecturabiblia: {
        title: 'Lectura Biblia',
        editor: {type : 'checkbox'}
      },
      primeraconversacion: {
        title: 'Primera conversacion',
        editor: {type : 'checkbox'}
      },
      revisita: {
        title: 'Revisita',
        editor: {type : 'checkbox'}
      },
      cursobiblico: {
        title: 'CursoBiblico',
        editor: {type : 'checkbox'}
      },
      ayudante: {
        title: 'Ayudante',
        editor: {type : 'checkbox'}
      },
      smmdiscurso: {
        title: 'Discurso Seamos mejores maestros',
        editor: {type : 'checkbox'}
      },
      nvc1: {
        title: 'NVC 1',
        editor: {type : 'checkbox'}
      },
      nvc2: {
        title: 'NVC 2',
        editor: {type : 'checkbox'}
      },
      estudiocongregacion: {
        title: 'Estudio congregación',
        editor: {type : 'checkbox'}
      },
      presidentedomingo: {
        title: 'Presidente Domingo',
        editor: {type : 'checkbox'}
      },
      lectorestudiocongregacion: {
        title: 'Lector Estudio congregación',
        editor: {type : 'checkbox'}
      },
      lectoreatalaya: {
        title: 'Lector Atalaya',
        editor: {type : 'checkbox'}
      },
      camara: {
        title: 'Camara',
        editor: {type : 'checkbox'}
      },
      aparatos: {
        title: 'Aparatos',
        editor: {type : 'checkbox'}
      },
      cronometro: {
        title: 'Cronómetro',
        editor: {type : 'checkbox'}
      },

    } 
  };
   data =[{"id":1,"name":"Jonathan Duncan","presidentesabado":true,"discurso1":false,"lecturabiblia":false,"oracion1":true,"oracion2":true,"ayudante":false,"primeraconversacion":false,"revisita":false,"cursobiblico":false,"nvc1":true,"nvc2":true,"estudiocongregacion":true,"lectorestudiocongregacion":false,"lectoreatalaya":false,"camara":false,"aparatos":false,"cronometro":false,"presidentedomingo":false,"smmdiscurso":false},{"id":2,"name":"Yolaine Duncan","presidentesabado":false,"discurso1":false,"lecturabiblia":false,"oracion1":false,"oracion2":false,"ayudante":true,"primeraconversacion":true,"revisita":true,"cursobiblico":true,"nvc1":false,"nvc2":false,"estudiocongregacion":false,"lectorestudiocongregacion":true,"lectoreatalaya":true,"camara":true,"aparatos":false,"cronometro":false,"presidentedomingo":false,"smmdiscurso":false},{"id":3,"name":"Francisco Hernández","presidentesabado":false,"discurso1":false,"lecturabiblia":false,"oracion1":false,"oracion2":false,"ayudante":false,"primeraconversacion":false,"revisita":false,"cursobiblico":false,"nvc1":false,"nvc2":false,"estudiocongregacion":false,"lectorestudiocongregacion":false,"lectoreatalaya":false,"camara":false,"aparatos":false,"cronometro":false,"presidentedomingo":false,"smmdiscurso":false},{"id":4,"name":"Nidia Hernández","presidentesabado":false,"discurso1":false,"lecturabiblia":false,"oracion1":false,"oracion2":false,"ayudante":true,"primeraconversacion":true,"revisita":true,"cursobiblico":true,"nvc1":false,"nvc2":false,"estudiocongregacion":false,"lectorestudiocongregacion":true,"lectoreatalaya":true,"camara":true,"aparatos":false,"cronometro":false,"presidentedomingo":false,"smmdiscurso":false},{"id":5,"name":"Fran David Hernández","presidentesabado":true,"discurso1":true,"lecturabiblia":false,"oracion1":true,"oracion2":true,"ayudante":false,"primeraconversacion":true,"revisita":false,"cursobiblico":false,"nvc1":true,"nvc2":true,"estudiocongregacion":true,"lectorestudiocongregacion":false,"lectoreatalaya":false,"camara":true,"aparatos":true,"cronometro":true,"presidentedomingo":true,"smmdiscurso":true},{"id":6,"name":"Claudia Ponce","presidentesabado":false,"discurso1":false,"lecturabiblia":false,"oracion1":false,"oracion2":false,"ayudante":true,"primeraconversacion":true,"revisita":true,"cursobiblico":false,"nvc1":false,"nvc2":false,"estudiocongregacion":false,"lectorestudiocongregacion":false,"lectoreatalaya":false,"camara":false,"aparatos":false,"cronometro":false,"presidentedomingo":false,"smmdiscurso":false},{"id":7,"name":"Mercy Lagos","presidentesabado":false,"discurso1":false,"lecturabiblia":false,"oracion1":false,"oracion2":false,"ayudante":true,"primeraconversacion":true,"revisita":true,"cursobiblico":false,"nvc1":false,"nvc2":false,"estudiocongregacion":false,"lectorestudiocongregacion":false,"lectoreatalaya":false,"camara":false,"aparatos":false,"cronometro":false,"presidentedomingo":false,"smmdiscurso":false},{"id":8,"name":"José Rivera","presidentesabado":true,"discurso1":true,"lecturabiblia":false,"oracion1":true,"oracion2":true,"ayudante":false,"primeraconversacion":false,"revisita":false,"cursobiblico":false,"nvc1":true,"nvc2":true,"estudiocongregacion":true,"lectorestudiocongregacion":false,"lectoreatalaya":false,"camara":true,"aparatos":true,"cronometro":true,"presidentedomingo":true,"smmdiscurso":true},{"id":9,"name":"Stefany Maradiaga","presidentesabado":false,"discurso1":false,"lecturabiblia":false,"oracion1":false,"oracion2":false,"ayudante":true,"primeraconversacion":true,"revisita":true,"cursobiblico":true,"nvc1":false,"nvc2":false,"estudiocongregacion":false,"lectorestudiocongregacion":true,"lectoreatalaya":true,"camara":true,"aparatos":true,"cronometro":false,"presidentedomingo":false,"smmdiscurso":false},{"id":10,"name":"Abigail Peralta","presidentesabado":false,"discurso1":false,"lecturabiblia":false,"oracion1":false,"oracion2":false,"ayudante":true,"primeraconversacion":true,"revisita":true,"cursobiblico":true,"nvc1":false,"nvc2":false,"estudiocongregacion":false,"lectorestudiocongregacion":true,"lectoreatalaya":true,"camara":true,"aparatos":false,"cronometro":false,"presidentedomingo":false,"smmdiscurso":false},{"id":11,"name":"Gabriel Escoto","presidentesabado":false,"discurso1":true,"lecturabiblia":true,"oracion1":true,"oracion2":true,"ayudante":false,"primeraconversacion":false,"revisita":false,"cursobiblico":false,"nvc1":false,"nvc2":false,"estudiocongregacion":true,"lectorestudiocongregacion":false,"lectoreatalaya":false,"camara":true,"aparatos":true,"cronometro":true,"presidentedomingo":true,"smmdiscurso":true},{"id":12,"name":"Conrado Méndez","presidentesabado":false,"discurso1":false,"lecturabiblia":false,"oracion1":false,"oracion2":false,"ayudante":false,"primeraconversacion":false,"revisita":false,"cursobiblico":false,"nvc1":false,"nvc2":false,"estudiocongregacion":false,"lectorestudiocongregacion":false,"lectoreatalaya":false,"camara":false,"aparatos":false,"cronometro":false,"presidentedomingo":false,"smmdiscurso":false},{"id":13,"name":"Jimmy Martinez","presidentesabado":false,"discurso1":false,"lecturabiblia":false,"oracion1":false,"oracion2":false,"ayudante":false,"primeraconversacion":false,"revisita":false,"cursobiblico":false,"nvc1":false,"nvc2":false,"estudiocongregacion":false,"lectorestudiocongregacion":false,"lectoreatalaya":false,"camara":false,"aparatos":false,"cronometro":false,"presidentedomingo":false,"smmdiscurso":false}];
  // data = [
  //   {
  //     id: 1,
  //     name: "Jonathan Duncan",
  //     presidentesabado: false,
  //     discurso1:false,
  //     lecturabiblia: false,
  //     oracion1: false,
  //     oracion2:false,
  //     ayudante: false,
  //     primeraconversacion:false,
  //     revisita: false,
  //     cursobiblico:false,
  //     nvc1: false,
  //     nvc2:false,
  //     estudiocongregacion:false,
  //     lectorestudiocongregacion:false,
  //     lectoreatalaya:false,
  //     camara: false,
  //     aparatos: false,
  //     cronometro:false,
  //     presidentedomingo:false
  //   },
  //   {
  //     id: 2,
  //     name: "Yolaine Duncan",
  //     presidentesabado: false,
  //     discurso1:false,
  //     lecturabiblia: false,
  //     oracion1: false,
  //     oracion2:false,
  //     ayudante: false,
  //     primeraconversacion:false,
  //     revisita: false,
  //     cursobiblico:false,
  //     nvc1: false,
  //     nvc2:false,
  //     estudiocongregacion:false,
  //     lectorestudiocongregacion:false,
  //     lectoreatalaya:false,
  //     camara: false,
  //     aparatos: false,
  //     cronometro:false,
  //     presidentedomingo:false
  //   },
    
  //   {
  //     id: 3,
  //     name: "Francisco Hernández",
  //     presidentesabado: false,
  //     discurso1:false,
  //     lecturabiblia: false,
  //     oracion1: false,
  //     oracion2:false,
  //     ayudante: false,
  //     primeraconversacion:false,
  //     revisita: false,
  //     cursobiblico:false,
  //     nvc1: false,
  //     nvc2:false,
  //     estudiocongregacion:false,
  //     lectorestudiocongregacion:false,
  //     lectoreatalaya:false,
  //     camara: false,
  //     aparatos: false,
  //     cronometro:false,
  //     presidentedomingo:false
  //   },

  //   {
  //     id: 4,
  //     name: "Nidia Hernández",
  //     presidentesabado: false,
  //     discurso1:false,
  //     lecturabiblia: false,
  //     oracion1: false,
  //     oracion2:false,
  //     ayudante: false,
  //     primeraconversacion:false,
  //     revisita: false,
  //     cursobiblico:false,
  //     nvc1: false,
  //     nvc2:false,
  //     estudiocongregacion:false,
  //     lectorestudiocongregacion:false,
  //     lectoreatalaya:false,
  //     camara: false,
  //     aparatos: false,
  //     cronometro:false,
  //     presidentedomingo:false
  //   },

  //   {
  //     id: 5,
  //     name: "Fran David Hernández",
  //     presidentesabado: false,
  //     discurso1:false,
  //     lecturabiblia: false,
  //     oracion1: false,
  //     oracion2:false,
  //     ayudante: false,
  //     primeraconversacion:false,
  //     revisita: false,
  //     cursobiblico:false,
  //     nvc1: false,
  //     nvc2:false,
  //     estudiocongregacion:false,
  //     lectorestudiocongregacion:false,
  //     lectoreatalaya:false,
  //     camara: false,
  //     aparatos: false,
  //     cronometro:false,
  //     presidentedomingo:false
  //   },

  //   {
  //     id: 6,
  //     name: "Claudia Ponce",
  //     presidentesabado: false,
  //     discurso1:false,
  //     lecturabiblia: false,
  //     oracion1: false,
  //     oracion2:false,
  //     ayudante: false,
  //     primeraconversacion:false,
  //     revisita: false,
  //     cursobiblico:false,
  //     nvc1: false,
  //     nvc2:false,
  //     estudiocongregacion:false,
  //     lectorestudiocongregacion:false,
  //     lectoreatalaya:false,
  //     camara: false,
  //     aparatos: false,
  //     cronometro:false,
  //     presidentedomingo:false
  //   },

  //   {
  //     id: 7,
  //     name: "Mercy Lagos",
  //     presidentesabado: false,
  //     discurso1:false,
  //     lecturabiblia: false,
  //     oracion1: false,
  //     oracion2:false,
  //     ayudante: false,
  //     primeraconversacion:false,
  //     revisita: false,
  //     cursobiblico:false,
  //     nvc1: false,
  //     nvc2:false,
  //     estudiocongregacion:false,
  //     lectorestudiocongregacion:false,
  //     lectoreatalaya:false,
  //     camara: false,
  //     aparatos: false,
  //     cronometro:false,
  //     presidentedomingo:false
  //   },

  //   {
  //     id: 8,
  //     name: "José Rivera",
  //     presidentesabado: false,
  //     discurso1:false,
  //     lecturabiblia: false,
  //     oracion1: false,
  //     oracion2:false,
  //     ayudante: false,
  //     primeraconversacion:false,
  //     revisita: false,
  //     cursobiblico:false,
  //     nvc1: false,
  //     nvc2:false,
  //     estudiocongregacion:false,
  //     lectorestudiocongregacion:false,
  //     lectoreatalaya:false,
  //     camara: false,
  //     aparatos: false,
  //     cronometro:false,
  //     presidentedomingo:false
  //   },

  //   {
  //     id: 9,
  //     name: "Stefany Maradiaga",
  //     presidentesabado: false,
  //     discurso1:false,
  //     lecturabiblia: false,
  //     oracion1: false,
  //     oracion2:false,
  //     ayudante: false,
  //     primeraconversacion:false,
  //     revisita: false,
  //     cursobiblico:false,
  //     nvc1: false,
  //     nvc2:false,
  //     estudiocongregacion:false,
  //     lectorestudiocongregacion:false,
  //     lectoreatalaya:false,
  //     camara: false,
  //     aparatos: false,
  //     cronometro:false,
  //     presidentedomingo:false
  //   },

  //   {
  //     id: 10,
  //     name: "Abigail Peralta",
  //     presidentesabado: false,
  //     discurso1:false,
  //     lecturabiblia: false,
  //     oracion1: false,
  //     oracion2:false,
  //     ayudante: false,
  //     primeraconversacion:false,
  //     revisita: false,
  //     cursobiblico:false,
  //     nvc1: false,
  //     nvc2:false,
  //     estudiocongregacion:false,
  //     lectorestudiocongregacion:false,
  //     lectoreatalaya:false,
  //     camara: false,
  //     aparatos: false,
  //     cronometro:false,
  //     presidentedomingo:false
  //   },

  //   {
  //     id: 11,
  //     name: "Gabriel Escoto",
  //     presidentesabado: false,
  //     discurso1:false,
  //     lecturabiblia: false,
  //     oracion1: false,
  //     oracion2:false,
  //     ayudante: false,
  //     primeraconversacion:false,
  //     revisita: false,
  //     cursobiblico:false,
  //     nvc1: false,
  //     nvc2:false,
  //     estudiocongregacion:false,
  //     lectorestudiocongregacion:false,
  //     lectoreatalaya:false,
  //     camara: false,
  //     aparatos: false,
  //     cronometro:false,
  //     presidentedomingo:false
  //   },

  //   {
  //     id: 12,
  //     name: "Conrado Méndez",
  //     presidentesabado: false,
  //     discurso1:false,
  //     lecturabiblia: false,
  //     oracion1: false,
  //     oracion2:false,
  //     ayudante: false,
  //     primeraconversacion:false,
  //     revisita: false,
  //     cursobiblico:false,
  //     nvc1: false,
  //     nvc2:false,
  //     estudiocongregacion:false,
  //     lectorestudiocongregacion:false,
  //     lectoreatalaya:false,
  //     camara: false,
  //     aparatos: false,
  //     cronometro:false,
  //     presidentedomingo:false
  //   },
  //   {
  //     id: 13,
  //     name: "Jimmy Martinez",
  //     presidentesabado: false,
  //     discurso1:false,
  //     lecturabiblia: false,
  //     oracion1: false,
  //     oracion2:false,
  //     ayudante: false,
  //     primeraconversacion:false,
  //     revisita: false,
  //     cursobiblico:false,
  //     nvc1: false,
  //     nvc2:false,
  //     estudiocongregacion:false,
  //     lectorestudiocongregacion:false,
  //     lectoreatalaya:false,
  //     camara: false,
  //     aparatos: false,
  //     cronometro:false,
  //     presidentedomingo:false
  //   },
  // ];

  SaveData(){
    console.log(JSON.stringify(this.data));
  }
}





