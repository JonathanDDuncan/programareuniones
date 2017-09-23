/**
* custom typings so typescript knows about the schema-fields
* @type {[type]}
*/
import * as RxDB from 'rxdb';
import { Observable } from 'rxjs';
// publicadores schema
declare interface RxPublicadorDocumentData {
  id?: string;

  name?: string;

  creado?: number;

  modificado?: number;

  presidentesabado?: boolean;

  discurso1?: boolean;

  lecturabiblia?: boolean;

  oracion1?: boolean;

  oracion2?: boolean;

  ayudante?: boolean;

  primeraconversacion?: boolean;

  revisita?: boolean;

  cursobiblico?: boolean;

  nvc1?: boolean;

  nvc2?: boolean;

  estudiocongregacion?: boolean;

  lectorestudiocongregacion?: boolean;

  lectoreatalaya?: boolean;

  camara?: boolean;

  aparatos?: boolean;

  cronometro?: boolean;

  presidentedomingo?: boolean;

  smmdiscurso?: boolean;

}
export class RxPublicadorDocument extends RxDB.RxDocument {
  id: string;

  creado: number;

  modificado: number;

  name?: string;

  presidentesabado?: boolean;

  discurso1?: boolean;

  lecturabiblia?: boolean;

  oracion1?: boolean;

  oracion2?: boolean;

  ayudante?: boolean;

  primeraconversacion?: boolean;

  revisita?: boolean;

  cursobiblico?: boolean;

  nvc1?: boolean;

  nvc2?: boolean;

  estudiocongregacion?: boolean;

  lectorestudiocongregacion?: boolean;

  lectoreatalaya?: boolean;

  camara?: boolean;

  aparatos?: boolean;

  cronometro?: boolean;

  presidentedomingo?: boolean;

  smmdiscurso?: boolean;

}
declare class RxPublicadorCollection extends RxDB.RxCollection<RxPublicadorDocument> {
}

// consejos schema
declare interface RxConsejoDocumentData {
  name?: string;

  consejo?: number;

}
export class RxConsejoDocument extends RxDB.RxDocument {
  name: string;

  consejo: number;

}
declare class RxConsejoCollection extends RxDB.RxCollection<RxConsejoDocument> {
}

// semana schema
declare interface RxSemanaDocumentData
{
id?: string;

creado?: number;

modificado?: number;

sabasamblea?: boolean;

sabasambleamensage?: string;

fecha?: number;

presidenteid?: string;

presidentename?: string;

cancion1id?: string;

cancion1name?: string;

oracion1id?: string;

oracion1name?: string;

tb1titulo?: string;

tb1oradorid?: string;

tb1oradorname?: string;

tbperlasoradorid?: string;

tbperlasoradorname?: string;

consejolector?: number;

tblectorid?: string;

tblectorname?: string;

hayestudiantes?: string;

consejoprimera?: number;

smmprimeraesid?: string;

smmprimeraesname?: string;

smmprimeraayuid?: string;

smmprimeraayuname?: string;

consejorevisita?: number;

smmrevisitaesid?: string;

smmrevisitaesname?: string;

smmrevisitaayuid?: string;

smmrevisitaayuname?: string;

escurso?: boolean;

consejocb?: number;

smmcbesid?: string;

smmcbesname?: string;

smmcbayuid?: string;

smmcbayuname?: string;

presentacionesmesid?: string;

presentacionesmesname?: string;

cancion2?: string;

nvctitulo1?: string;

nvcmins1?: string;

nvcorador1id?: string;

nvcorador1name?: string;

nvctitulo2id?: string;

nvctitulo2name?: string;

nvcmins2?: string;

nvcorador2id?: string;

nvcorador2name?: string;

nvcestudiooradorid?: string;

nvcestudiooradorname?: string;

nvcestudiolectorid?: string;

nvcestudiolectorname?: string;

cancion3?: string;

oracion2id?: string;

oracion2name?: string;

camaraid?: string;

camaraname?: string;

aparatosid?: string;

aparatosname?: string;

cronometroid?: string;

cronometroname?: string;

domasamblea?: boolean;

domasambleamensage?: string;

domfecha?: string;

dompresidenteid?: string;

dompresidentename?: string;

domdiscursante?: string;

domhaydiscursante?: boolean;

domlecturaid?: string;

domlecturaname?: string;

} 
export class RxSemanaDocument extends RxDB.RxDocument 
{
id: string;

creado?: number;

modificado?: number;

sabasamblea?: boolean;

sabasambleamensage?: string;

fecha?: number;

presidenteid?: string;

presidentename?: string;

cancion1id?: string;

cancion1name?: string;

oracion1id?: string;

oracion1name?: string;

tb1titulo?: string;

tb1oradorid?: string;

tb1oradorname?: string;

tbperlasoradorid?: string;

tbperlasoradorname?: string;

consejolector?: number;

tblectorid?: string;

tblectorname?: string;

hayestudiantes?: string;

consejoprimera?: number;

smmprimeraesid?: string;

smmprimeraesname?: string;

smmprimeraayuid?: string;

smmprimeraayuname?: string;

consejorevisita?: number;

smmrevisitaesid?: string;

smmrevisitaesname?: string;

smmrevisitaayuid?: string;

smmrevisitaayuname?: string;

escurso?: boolean;

consejocb?: number;

smmcbesid?: string;

smmcbesname?: string;

smmcbayuid?: string;

smmcbayuname?: string;

presentacionesmesid?: string;

presentacionesmesname?: string;

cancion2?: string;

nvctitulo1?: string;

nvcmins1?: string;

nvcorador1id?: string;

nvcorador1name?: string;

nvctitulo2id?: string;

nvctitulo2name?: string;

nvcmins2?: string;

nvcorador2id?: string;

nvcorador2name?: string;

nvcestudiooradorid?: string;

nvcestudiooradorname?: string;

nvcestudiolectorid?: string;

nvcestudiolectorname?: string;

cancion3?: string;

oracion2id?: string;

oracion2name?: string;

camaraid?: string;

camaraname?: string;

aparatosid?: string;

aparatosname?: string;

cronometroid?: string;

cronometroname?: string;

domasamblea?: boolean;

domasambleamensage?: string;

domfecha?: string;

dompresidenteid?: string;

dompresidentename?: string;

domdiscursante?: string;

domhaydiscursante?: boolean;

domlecturaid?: string;

domlecturaname?: string;

} 
declare class RxSemanaCollection extends RxDB.RxCollection <RxSemanaDocument> { 
} 

export class RxProgramasDatabase extends RxDB.RxDatabase {
  publicadores?: RxPublicadorCollection;
  consejos?: RxConsejoCollection;
  semanas?: RxSemanaCollection;
}

export default {
  RxPublicadorDocument,
  RxPublicadorCollection,

  RxConsejoDocument,
  RxConsejoCollection,

  RxSemanaDocument,
  RxSemanaCollection,

  RxProgramasDatabase
};
declare var require: any;
