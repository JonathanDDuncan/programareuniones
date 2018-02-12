import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import FileSaver from 'file-saver';
import Docxtemplater from 'docxtemplater';
import { FillSemanaService } from '../../services/fill-semana.service';
declare var require: any;
const datosprograma = require('../../json/datosprograma.json');
  
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  constructor(public navCtrl: NavController, private fillSemanaService: FillSemanaService) { }
  loadFile(url: string, callback) {

    JSZipUtils.getBinaryContent(url, callback);
  };
  fillLastWeek() {
    debugger;
    let semana: string;
    this.fillSemanaService.fillSemana().then(result => alert(result));

  }
  runloadfile() {
    let result = this.loadFile("../assets/examples/S-140-S-template.docx", function (error, content) {
      if (error) { throw error };
      var zip = new JSZip(content);
      var doc = new Docxtemplater().loadZip(zip)
      doc.setData(
        { 
          "cong": "Congregación Danlí Señas",
          "semanas": datosprograma
        } 
      ); 

      try {
        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render()
      }
      catch (error) {
        var e = {
          message: error.message,
          name: error.name,
          stack: error.stack,
          properties: error.properties,
        }
        console.log(JSON.stringify({ error: e }));
        // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
        throw error;
      }
      var out = doc.getZip().generate({
        type: "blob",
        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      }) //Output the document using Data-URI
      FileSaver.saveAs(out, "output.docx")
    }
    )
  };

  getpreviousweeks() {
    return {
      "cong": "Congregación Danlí Señas",
      "semanas": [
        {
          "resfecha": "4 de nov de 2017",
          "sabasamblea": false,
          "cancion1": 77,
          "cancion2": 30,
          "cancion3": 106,
          "tb1titulo": "Sus hijos y sus hijas ciertamente profetizarán",
          "nvctitulo1": "Jehová nos ayuda a aguantar las pruebas",
          "nvcmins1": 9,
          "nvc1anciano": false,
          "nvctitulo2": "Hazte amigo de Jehová: El nombre de Jehová",
          "nvcmins2": 6,
          "nvc2anciano": false,
          "hayestudiantes": false,
          "escurso": true,
          "domasamblea": false,
          "domfecha": "5 de nov de 2017",
          "domhaydiscursante": false,
          "domdiscursante": "",
          "sabasambleamensage": "",
          "domasambleamensage": "",
          "temacancion1": "Luz en un mundo oscuro (2 Corintios 4:6)",
          "temacancion2": "Mi Amigo, mi Padre, mi Dios (Hebreos 6:10)",
          "temacancion3": "Cultivemos amor verdadero (1 Corintios 13:1-8)",
          "respcancion1": "Yolaine",
          "respcancion2": "Yolaine",
          "respcancion3": "Abigail",
          "nvcorador1": "Gabriel Escoto",
          "nvcorador2": "Fran David Hernandez",
          "nvcestudioorador": "Gabriel Escoto",
          "presidente": "Jose Rivera",
          "presentacionesmes": "Fran David Hernandez",
          "tbperlasorador": "Jose Rivera",
          "tb1orador": "Video streaming",
          "tblector": "Video streaming",
          "consejolector": 0,
          "smmprimeraes": "",
          "smmprimeraayu": "",
          "consejoprimera": 0,
          "smmrevisitaes": "",
          "smmrevisitaayu": "",
          "consejorevisita": 0,
          "smmcbes": "",
          "smmcbayu": "",
          "consejocb": 0,
          "nvcestudiolector": "Yolaine Duncan ",
          "domlectura": "Abigail Peralta",
          "aparatos": "Francisco David Hernandez ",
          "camara": "Gabriel Escoto",
          "cronometro": "Gabriel Escoto",
          "nvc3h1": "4:05",
          "oracion1": "Jose Rivera",
          "oracion2": "Francisco David Hernandez ",
          "dompresidente": "Francisco David Hernandez ",
          "ini1h1": "3:00",
          "ini2h1": "3:05",
          "tb1h1": "3:08",
          "tb2h1": "3:18",
          "tb3h1": "3:26",
          "smm1h1": "3:30",
          "smm2h1": "3:33",
          "smm3h1": "3:38",
          "nvc1h1": "3:45",
          "nvc2h1": "3:50",
          "nvc4h1": "4:05",
          "nvc5h1": "4:35",
          "nvc6h1": "4:40",
          "nvc6h2": "4:45"
        },
        {
          "resfecha": "7 de oct de 2017",
          "sabasamblea": false,
          "cancion1": 95,
          "cancion2": 78,
          "cancion3": 101,
          "tb1titulo": "La profecía de Daniel predijo la llegada del Mesías",
          "nvctitulo1": "Cómo ser un buen estudiante de la Biblia",
          "nvcmins1": 15,
          "nvc1anciano": false,
          "nvctitulo2": "",
          "nvcmins2": 0,
          "nvc2anciano": false,
          "hayestudiantes": false,
          "escurso": true,
          "domasamblea": false,
          "domfecha": "8 de oct de 2017",
          "domhaydiscursante": false,
          "domdiscursante": "",
          "sabasambleamensage": "",
          "domasambleamensage": "",
          "temacancion1": "La luz brilla más cada día (Proverbios 4:18)",
          "temacancion2": "Enseñemos la Palabra de Dios (Hechos 18:11)",
          "temacancion3": "Sirvamos a Dios en unidad (Efesios 4:3)",
          "respcancion1": "Abigail Peralta",
          "respcancion2": "Abigail Peralta",
          "respcancion3": "Stefany Maradiaga",
          "nvcorador1": "Jose Rivera",
          "nvcorador2": "",
          "nvcestudioorador": "Jose Rivera",
          "presidente": "Jonathan Duncan ",
          "presentacionesmes": "Jonathan Duncan ",
          "tbperlasorador": "Francisco David Hernandez ",
          "tb1orador": "Gabriel Escoto",
          "tblector": "Francisco David Hernandez ",
          "consejolector": 32,
          "smmprimeraes": "",
          "smmprimeraayu": "",
          "consejoprimera": 0,
          "smmrevisitaes": "",
          "smmrevisitaayu": "",
          "consejorevisita": 0,
          "smmcbes": "",
          "smmcbayu": "",
          "consejocb": 0,
          "nvcestudiolector": "Yolaine Duncan ",
          "domlectura": "Abigail Peralta",
          "aparatos": "Francisco David Hernandez ",
          "camara": "Gabriel Escoto",
          "cronometro": "Gabriel Escoto",
          "nvc3h1": "4:05",
          "oracion1": "Jose Rivera",
          "oracion2": "Francisco David Hernandez ",
          "dompresidente": "Francisco David Hernandez ",
          "ini1h1": "3:00",
          "ini2h1": "3:05",
          "tb1h1": "3:08",
          "tb2h1": "3:18",
          "tb3h1": "3:26",
          "smm1h1": "3:30",
          "smm2h1": "3:33",
          "smm3h1": "3:38",
          "nvc1h1": "3:45",
          "nvc2h1": "3:50",
          "nvc4h1": "4:05",
          "nvc5h1": "4:35",
          "nvc6h1": "4:40",
          "nvc6h2": "4:45"
        },
        {
          "resfecha": "14 de oct de 2017",
          "sabasamblea": false,
          "cancion1": 63,
          "cancion2": 94,
          "cancion3": 91,
          "tb1titulo": "Jehová predijo el futuro de reyes",
          "nvctitulo1": "Las profecías de la Biblia nos fortalecen",
          "nvcmins1": 15,
          "nvc1anciano": false,
          "nvctitulo2": "",
          "nvcmins2": 0,
          "nvc2anciano": false,
          "hayestudiantes": true,
          "escurso": false,
          "domasamblea": false,
          "domfecha": "15 de oct de 2017",
          "domhaydiscursante": false,
          "domdiscursante": "",
          "sabasambleamensage": "",
          "domasambleamensage": "",
          "temacancion1": "¡Soy testigo de Jehová! (Isaías 43:10-12)",
          "temacancion2": "Agradecidos por la Palabra de Dios (Filipenses 2:16)",
          "temacancion3": "Una obra de amor (Salmo 127:1)",
          "respcancion1": "Abigail Peralta",
          "respcancion2": "Jose Rivera",
          "respcancion3": "Jose Rivera",
          "nvcorador1": "Gabriel Escoto",
          "nvcorador2": "",
          "nvcestudioorador": "Francisco David Hernandez ",
          "presidente": "Jose Rivera",
          "presentacionesmes": "",
          "tbperlasorador": "Jose Rivera",
          "tb1orador": "Jonathan Duncan ",
          "tblector": "Gabriel Escoto",
          "consejolector": 3,
          "smmprimeraes": "Mercy Lagos",
          "smmprimeraayu": "Abigail Peralta",
          "consejoprimera": 10,
          "smmrevisitaes": "Mercy Lagos",
          "smmrevisitaayu": "Abigail Peralta",
          "consejorevisita": 10,
          "smmcbes": "Francisco David Hernandez ",
          "smmcbayu": "",
          "consejocb": 35,
          "nvcestudiolector": "Nidia de Hernandez ",
          "domlectura": "Stefany Maradiaga",
          "aparatos": "Gabriel Escoto",
          "camara": "Jose Rivera",
          "cronometro": "Francisco David Hernandez ",
          "nvc3h1": "4:05",
          "oracion1": "Gabriel Escoto",
          "oracion2": "Jonathan Duncan ",
          "dompresidente": "Gabriel Escoto",
          "ini1h1": "3:00",
          "ini2h1": "3:05",
          "tb1h1": "3:08",
          "tb2h1": "3:18",
          "tb3h1": "3:26",
          "smm1h1": "3:30",
          "smm2h1": "3:33",
          "smm3h1": "3:38",
          "nvc1h1": "3:45",
          "nvc2h1": "3:50",
          "nvc4h1": "4:05",
          "nvc5h1": "4:35",
          "nvc6h1": "4:40",
          "nvc6h2": "4:45"
        },
        {
          "resfecha": "21 de oct de 2017",
          "sabasamblea": false,
          "cancion1": 108,
          "cancion2": 100,
          "cancion3": 107,
          "tb1titulo": "Jehová valora el amor leal. ¿Lo valora usted?",
          "nvctitulo1": "Necesidades de la congregación",
          "nvcmins1": 15,
          "nvc1anciano": true,
          "nvctitulo2": "",
          "nvcmins2": 0,
          "nvc2anciano": false,
          "hayestudiantes": true,
          "escurso": true,
          "domasamblea": false,
          "domfecha": "22 de oct de 2017",
          "domhaydiscursante": false,
          "domdiscursante": "",
          "sabasambleamensage": "",
          "domasambleamensage": "",
          "temacancion1": "El amor leal de Jehová (Isaías 55:1-3)",
          "temacancion2": "Seamos hospitalarios (Hechos 17:7)",
          "temacancion3": "Dios nos enseñó a amar (1 Juan 4:19)",
          "respcancion1": "Stefany Maradiaga",
          "respcancion2": "Yolaine Duncan",
          "respcancion3": "Jose Rivera",
          "nvcorador1": "Jonathan Duncan ",
          "nvcorador2": "",
          "nvcestudioorador": "Gabriel Escoto",
          "presidente": "Francisco David Hernandez ",
          "presentacionesmes": "",
          "tbperlasorador": "Francisco David Hernandez ",
          "tb1orador": "Jose Rivera",
          "tblector": "Video Ceiba",
          "consejolector": 0,
          "smmprimeraes": "Nidia de Hernandez ",
          "smmprimeraayu": "Mercy Lagos",
          "consejoprimera": 11,
          "smmrevisitaes": "Nidia de Hernandez ",
          "smmrevisitaayu": "Mercy Lagos",
          "consejorevisita": 11,
          "smmcbes": "Yolaine Duncan ",
          "smmcbayu": "Stefany Maradiaga",
          "consejocb": 7,
          "nvcestudiolector": "Yolaine Duncan ",
          "domlectura": "Abigail Peralta",
          "aparatos": "Jose Rivera",
          "camara": "Nidia de Hernandez ",
          "cronometro": "Francisco David Hernandez ",
          "nvc3h1": "4:05",
          "oracion1": "Jose Rivera",
          "oracion2": "Francisco David Hernandez ",
          "dompresidente": "Jonathan Duncan ",
          "ini1h1": "3:00",
          "ini2h1": "3:05",
          "tb1h1": "3:08",
          "tb2h1": "3:18",
          "tb3h1": "3:26",
          "smm1h1": "3:30",
          "smm2h1": "3:33",
          "smm3h1": "3:38",
          "nvc1h1": "3:45",
          "nvc2h1": "3:50",
          "nvc4h1": "4:05",
          "nvc5h1": "4:35",
          "nvc6h1": "4:40",
          "nvc6h2": "4:45"
        },
        {
          "resfecha": "28 de oct de 2017",
          "sabasamblea": false,
          "cancion1": 76,
          "cancion2": 69,
          "cancion3": 124,
          "tb1titulo": "Dele a Jehová lo mejor",
          "nvctitulo1": "Usemos nuestra vida para alabar a Jehová",
          "nvcmins1": 15,
          "nvc1anciano": false,
          "nvctitulo2": "",
          "nvcmins2": 0,
          "nvc2anciano": false,
          "hayestudiantes": true,
          "escurso": true,
          "domasamblea": false,
          "domfecha": "29 de oct de 2017",
          "domhaydiscursante": false,
          "domdiscursante": "",
          "sabasambleamensage": "",
          "domasambleamensage": "",
          "temacancion1": "Cuéntame lo que sientes (Hebreos 13:15)",
          "temacancion2": "Prediquen las nuevas del Reino (2 Timoteo 4:5)",
          "temacancion3": "Siempre fieles y leales (Salmo 18:25)",
          "respcancion1": "Stefany Maradiaga",
          "respcancion2": "Stefany Maradiaga",
          "respcancion3": "Abigail Peralta",
          "nvcorador1": "Francisco David Hernandez ",
          "nvcorador2": "",
          "nvcestudioorador": "Jonathan Duncan ",
          "presidente": "Jose Rivera",
          "presentacionesmes": "",
          "tbperlasorador": "Jose Rivera",
          "tb1orador": "Gabriel Escoto",
          "tblector": "Francisco David Hernandez ",
          "consejolector": 1,
          "smmprimeraes": "Stefany Maradiaga",
          "smmprimeraayu": "Yolaine Duncan ",
          "consejoprimera": 10,
          "smmrevisitaes": "Stefany Maradiaga",
          "smmrevisitaayu": "Yolaine Duncan ",
          "consejorevisita": 10,
          "smmcbes": "Claudia Ponce ",
          "smmcbayu": "Abigail Peralta",
          "consejocb": 8,
          "nvcestudiolector": "Abigail Peralta",
          "domlectura": "Nidia de Hernandez ",
          "aparatos": "Francisco David Hernandez ",
          "camara": "Yolaine Duncan ",
          "cronometro": "Gabriel Escoto",
          "nvc3h1": "4:05",
          "oracion1": "Gabriel Escoto",
          "oracion2": "Jonathan Duncan ",
          "dompresidente": "Jose Rivera",
          "ini1h1": "3:00",
          "ini2h1": "3:05",
          "tb1h1": "3:08",
          "tb2h1": "3:18",
          "tb3h1": "3:26",
          "smm1h1": "3:30",
          "smm2h1": "3:33",
          "smm3h1": "3:38",
          "nvc1h1": "3:45",
          "nvc2h1": "3:50",
          "nvc4h1": "4:05",
          "nvc5h1": "4:35",
          "nvc6h1": "4:40",
          "nvc6h2": "4:45"
        },
        {
          "resfecha": "4 de nov de 2017",
          "sabasamblea": false,
          "cancion1": 77,
          "cancion2": 30,
          "cancion3": 106,
          "tb1titulo": "“Sus hijos y sus hijas ciertamente profetizarán”",
          "nvctitulo1": "Jehová nos ayuda a aguantar las pruebas",
          "nvcmins1": 9,
          "nvc1anciano": false,
          "nvctitulo2": "Hazte amigo de Jehová: El nombre de Jehová",
          "nvcmins2": 6,
          "nvc2anciano": false,
          "hayestudiantes": true,
          "escurso": true,
          "domasamblea": false,
          "domfecha": "5 de nov de 2017",
          "domhaydiscursante": false,
          "domdiscursante": "",
          "sabasambleamensage": "",
          "domasambleamensage": "",
          "temacancion1": "Lucha por progresar 65 Luz en un mundo oscuro (2 Corintios 4:6) Yolaine",
          "temacancion2": "Mi Amigo, mi Padre, mi Dios (Hebreos 6:10)",
          "temacancion3": "Cultivemos amor verdadero (1 Corintios 13:1-8)",
          "respcancion1": "Yolaine Duncan",
          "respcancion2": "Yolaine Duncan",
          "respcancion3": "Abigail Peralta",
          "nvcorador1": "Gabriel Escoto",
          "nvcorador2": "Jonathan Duncan ",
          "nvcestudioorador": "Jose Rivera",
          "presidente": "Francisco David Hernandez ",
          "presentacionesmes": "",
          "tbperlasorador": "Francisco David Hernandez ",
          "tb1orador": "Gabriel Escoto",
          "tblector": "Gabriel Escoto",
          "consejolector": 4,
          "smmprimeraes": "Yolaine Duncan ",
          "smmprimeraayu": "Mercy Lagos",
          "consejoprimera": 23,
          "smmrevisitaes": "Yolaine Duncan ",
          "smmrevisitaayu": "Mercy Lagos",
          "consejorevisita": 23,
          "smmcbes": "Abigail Peralta",
          "smmcbayu": "Nidia de Hernandez ",
          "consejocb": 6,
          "nvcestudiolector": "Stefany Maradiaga",
          "domlectura": "Yolaine Duncan ",
          "aparatos": "Gabriel Escoto",
          "camara": "Abigail Peralta",
          "cronometro": "Jose Rivera",
          "nvc3h1": "3:59",
          "oracion1": "Jose Rivera",
          "oracion2": "Francisco David Hernandez ",
          "dompresidente": "Francisco David Hernandez ",
          "ini1h1": "3:00",
          "ini2h1": "3:05",
          "tb1h1": "3:08",
          "tb2h1": "3:18",
          "tb3h1": "3:26",
          "smm1h1": "3:30",
          "smm2h1": "3:33",
          "smm3h1": "3:38",
          "nvc1h1": "3:45",
          "nvc2h1": "3:50",
          "nvc4h1": "4:05",
          "nvc5h1": "4:35",
          "nvc6h1": "4:40",
          "nvc6h2": "4:45"
        }
      ]

    }
  }
}





