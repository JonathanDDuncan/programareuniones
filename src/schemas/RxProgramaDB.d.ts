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

export class RxProgramasDatabase extends RxDB.RxDatabase {
  publicadores?: RxPublicadorCollection;
  consejos?: RxConsejoCollection;
}
export default {
  RxPublicadorDocument,
  RxPublicadorCollection,

  RxConsejoDocument,
  RxConsejoCollection,

  RxProgramasDatabase
};
declare var require: any;
