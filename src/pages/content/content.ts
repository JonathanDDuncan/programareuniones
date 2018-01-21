import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import FileSaver from 'file-saver';
import Docxtemplater from 'docxtemplater';
import { FillSemanaService } from '../../services/fill-semana.service';

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
          "semanas":[{"resfecha":"5-11 de febrero","sabasamblea":false,"cancion1":27,"cancion2":68,"cancion3":10,"domcancion1":151,"domcancion2":147,"tb1titulo":"La parábola del trigo y la mala hierba","nvctitulo1":"Necesidades de la congregación","nvcmins1":5,"nvc1anciano":true,"nvctitulo2":" Qué aprendemos de las parábolas sobre el Reino?","nvcmins2":10,"nvc2anciano":false,"smmtema1":" Video de la primera conversación","smmtema2":" Primera revisita","smmtema3":" Curso bíblico","smmmin1":4,"smmmin2":3,"smmmin3":6,"smmesvideo1":true,"smmesvideo2":false,"smmesvideo3":false,"escurso":true,"domasamblea":false,"domfecha":" 5-11 de febrero","domhaydiscursante":false,"domdiscursante":"","sabasambleamensage":"","domasambleamensage":"","temacancion1":"La revelación de los hijos de Dios (Romanos 8:19)","temacancion2":"Sembremos semillas del Reino (Mateo 13:4-8)","temacancion3":"¡Alabemos a nuestro Dios, Jehová! (Salmo 145:12)","domtemacancion1":"Jehová los llamará (Job 14:13-15)","domtemacancion2":"Dios nos promete la vida eterna (Salmo 37:29)","respcancion1":"Yolaine Duncan","respcancion2":"Yolaine Duncan","respcancion3":"Abigail Peralta","domrespcancion1":"Jose Rivera","domrespcancion2":"Yolaine Duncan","nvcorador1":"Jonathan Duncan","nvcorador2":"Gabriel Escoto","nvcestudioorador":"Jose Rivera","presidente":"Francisco David Hernandez","presentacionesmes":"","tbperlasorador":"Francisco David Hernandez","tb1orador":"J. Francisco Hernandez","tblector":"Alex Pérez","consejolector":7,"smmprimeraes":"Francisco David Hernandez","smmprimeraayu":"","consejoprimera":0,"smmrevisitaes":"Abigail Peralta","smmrevisitaayu":"Claudia Ponce","consejorevisita":28,"smmcbes":"Mercy Lagos","smmcbayu":"Nidia de Hernandez","consejocb":1,"nvcestudiolector":"Stefany Maradiaga","domlectura":"Nidia de Hernandez","aparatos":"J. Francisco Hernandez","camara":"Yolaine Duncan","cronometro":"Gabriel Escoto","nvc3h1":"3:55","oracion1":"Francisco David Hernandez","oracion2":"Gabriel Escoto","dompresidente":"J. Francisco Hernandez","ini1h1":"3:00","ini2h1":"3:05","tb1h1":"3:08","tb2h1":"3:18","tb3h1":"3:26","smm1h1":"3:30","smm2h1":"3:33","smm3h1":"3:38","nvc1h1":"3:45","nvc2h1":"3:50","nvc4h1":"4:05","nvc5h1":"4:35","nvc6h1":"4:40","nvc6h2":"4:45"},{"resfecha":"12-18 de febrero","sabasamblea":false,"cancion1":93,"cancion2":135,"cancion3":148,"domcancion1":141,"domcancion2":134,"tb1titulo":"Jesús alimenta a muchos por medio de unos pocos","nvctitulo1":" Hazte amigo de Jehová: Busca nuevos amigos","nvcmins1":7,"nvc1anciano":false,"nvctitulo2":"Honra a tu padre y a tu madre","nvcmins2":8,"nvc2anciano":false,"smmtema1":" Primera conversación","smmtema2":" Video de la primera revisita","smmtema3":" Video de la primera revisita","smmmin1":2,"smmmin2":5,"smmmin3":6,"smmesvideo1":false,"smmesvideo2":true,"smmesvideo3":false,"escurso":false,"domasamblea":false,"domfecha":" 12-18 de febrero","domhaydiscursante":false,"domdiscursante":"","sabasambleamensage":"","domasambleamensage":"","temacancion1":"Bendice nuestras reuniones (Hebreos 10:24, 25)","temacancion2":"Jehová te pide: “Sé sabio, hijo mío” (Proverbios 27:11)","temacancion3":"Jehová es mi Roca de salvación (2 Samuel 22:1-8)","domtemacancion1":"El maravilloso regalo de la vida (Salmo 36:9)","domtemacancion2":"Los hijos son un regalo de Dios (Salmo 127:3-5)","respcancion1":"Abigail Peralta","respcancion2":"Stefany Maradiaga","respcancion3":"Stefany Maradiaga","domrespcancion1":"Francisco David Hernandez","domrespcancion2":"Stefany Maradiaga","nvcorador1":"Jose Rivera","nvcorador2":"","nvcestudioorador":"Gabriel Escoto","presidente":"Francisco David Hernandez","presentacionesmes":"","tbperlasorador":"Francisco David Hernandez","tb1orador":"Jonathan Duncan","tblector":"J. Francisco Hernandez","consejolector":15,"smmprimeraes":"Claudia Ponce","smmprimeraayu":"Nidia de Hernandez","consejoprimera":1,"smmrevisitaes":"Francisco David Hernandez","smmrevisitaayu":"","consejorevisita":0,"smmcbes":"Alex Pérez","smmcbayu":"","consejocb":33,"nvcestudiolector":"Yolaine Duncan","domlectura":"Stefany Maradiaga","aparatos":"Nidia de Hernandez","camara":"Abigail Peralta","cronometro":"Jose Rivera","nvc3h1":"3:57","oracion1":"Gabriel Escoto","oracion2":"J. Francisco Hernandez","dompresidente":"Jose Rivera","ini1h1":"3:00","ini2h1":"3:05","tb1h1":"3:08","tb2h1":"3:18","tb3h1":"3:26","smm1h1":"3:30","smm2h1":"3:33","smm3h1":"3:38","nvc1h1":"3:45","nvc2h1":"3:50","nvc4h1":"4:05","nvc5h1":"4:35","nvc6h1":"4:40","nvc6h2":"4:45"},{"resfecha":" 19-25 de febrero","sabasamblea":false,"cancion1":45,"cancion2":78,"cancion3":134,"domcancion1":133,"domcancion2":135,"tb1titulo":"¿Pensamos como piensa Dios?","nvctitulo1":" Mejore sus habilidades en el ministerio: Use bien las preguntas","nvcmins1":15,"nvc1anciano":false,"nvctitulo2":"","nvcmins2":0,"nvc2anciano":false,"smmtema1":"Primera conversación","smmtema2":" Primera revisita","smmtema3":" Video de la segunda revisita","smmmin1":2,"smmmin2":3,"smmmin3":5,"smmesvideo1":false,"smmesvideo2":false,"smmesvideo3":true,"escurso":true,"domasamblea":false,"domfecha":" 19-25 de febrero","domhaydiscursante":false,"domdiscursante":"","sabasambleamensage":"","domasambleamensage":"","temacancion1":"“La meditación de mi corazón” (Salmo 19:14)","temacancion2":"Enseñemos la Palabra de Dios (Hechos 18:11)","temacancion3":"Los hijos son un regalo de Dios (Salmo 127:3-5)","domtemacancion1":"Sirvamos a Jehová en nuestra juventud (Eclesiastés 12:1)","domtemacancion2":"Jehová te pide: “Sé sabio, hijo mío” (Proverbios 27:11)","respcancion1":"Stefany Maradiaga","respcancion2":"Abigail Peralta","respcancion3":"Stefany Maradiaga","domrespcancion1":"Jose Rivera","domrespcancion2":"Stefany Maradiaga","nvcorador1":"Jose Rivera","nvcorador2":"","nvcestudioorador":"Jonathan Duncan","presidente":"Francisco David Hernandez","presentacionesmes":"","tbperlasorador":"Francisco David Hernandez","tb1orador":"Gabriel Escoto","tblector":"Alex Pérez","consejolector":11,"smmprimeraes":"Nidia de Hernandez","smmprimeraayu":"Abigail Peralta","consejoprimera":36,"smmrevisitaes":"Nidia de Hernandez","smmrevisitaayu":"Abigail Peralta","consejorevisita":36,"smmcbes":"Francisco David Hernandez","smmcbayu":"","consejocb":0,"nvcestudiolector":"Abigail Peralta","domlectura":"Yolaine Duncan","aparatos":"J. Francisco Hernandez","camara":"Nidia de Hernandez","cronometro":"Gabriel Escoto","nvc3h1":"4:05","oracion1":"J. Francisco Hernandez","oracion2":"Jonathan Duncan","dompresidente":"Francisco David Hernandez","ini1h1":"3:00","ini2h1":"3:05","tb1h1":"3:08","tb2h1":"3:18","tb3h1":"3:26","smm1h1":"3:30","smm2h1":"3:33","smm3h1":"3:38","nvc1h1":"3:45","nvc2h1":"3:50","nvc4h1":"4:05","nvc5h1":"4:35","nvc6h1":"4:40","nvc6h2":"4:45"},{"resfecha":" 26 de febrero a 4 de marzo","sabasamblea":false,"cancion1":121,"cancion2":90,"cancion3":133,"domcancion1":3,"domcancion2":47,"tb1titulo":" Procuremos no tropezar ni hacer tropezar a otros","nvctitulo1":" Nunca hagamos tropezar a otros","nvcmins1":9,"nvc1anciano":false,"nvctitulo2":" El 3 de marzo comienza la campaña de la Conmemoración","nvcmins2":6,"nvc2anciano":false,"smmtema1":" Segunda revisita","smmtema2":" Tercera revisita","smmtema3":"Curso bíblico","smmmin1":3,"smmmin2":3,"smmmin3":6,"smmesvideo1":false,"smmesvideo2":false,"smmesvideo3":false,"escurso":true,"domasamblea":false,"domfecha":" 26 de febrero a 4 de marzo","domhaydiscursante":false,"domdiscursante":"","sabasambleamensage":"","domasambleamensage":"","temacancion1":"Necesitamos autodominio (Romanos 7:14-25)","temacancion2":"Animémonos unos a otros (Hebreos 10:24, 25)","temacancion3":"Sirvamos a Jehová en nuestra juventud (Eclesiastés 12:1)","domtemacancion1":"Tú me das fuerzas, confianza y valor (Proverbios 14:26)","domtemacancion2":"Oremos a Dios todos los días (1 Tesalonicenses 5:17)","respcancion1":"Stefany Maradiaga","respcancion2":"Stefany Maradiaga","respcancion3":"Jose Rivera","domrespcancion1":"Yolaine Duncan","domrespcancion2":"Stefany Maradiaga","nvcorador1":"Jonathan Duncan","nvcorador2":"Gabriel Escoto","nvcestudioorador":"Francisco David Hernandez","presidente":"Jose Rivera","presentacionesmes":"","tbperlasorador":"Jose Rivera","tb1orador":"J. Francisco Hernandez","tblector":"Alex Pérez","consejolector":3,"smmprimeraes":"Stefany Maradiaga","smmprimeraayu":"Claudia Ponce","consejoprimera":33,"smmrevisitaes":"Stefany Maradiaga","smmrevisitaayu":"Claudia Ponce","consejorevisita":33,"smmcbes":"Yolaine Duncan","smmcbayu":"Abigail Peralta","consejocb":12,"nvcestudiolector":"Nidia de Hernandez","domlectura":"Abigail Peralta","aparatos":"Yolaine Duncan","camara":"J. Francisco Hernandez","cronometro":"Gabriel Escoto","nvc3h1":"3:59","oracion1":"Jonathan Duncan","oracion2":"Jose Rivera","dompresidente":"Gabriel Escoto","ini1h1":"3:00","ini2h1":"3:05","tb1h1":"3:08","tb2h1":"3:18","tb3h1":"3:26","smm1h1":"3:30","smm2h1":"3:33","smm3h1":"3:38","nvc1h1":"3:45","nvc2h1":"3:50","nvc4h1":"4:05","nvc5h1":"4:35","nvc6h1":"4:40","nvc6h2":"4:45"}]
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





