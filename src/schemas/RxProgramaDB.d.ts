/**
 * custom typings so typescript knows about the schema-fields
 * @type {[type]}
 */

import * as RxDB from 'rxdb';
import { Observable } from 'rxjs';

declare interface RxPublicadorDocumentData {
    name?: string;
    age?: number;
   
}

export class RxPublicadorDocument extends RxDB.RxDocument {
    name: string;
    age?: number;
}

declare class RxPublicadorCollection extends RxDB.RxCollection<RxPublicadorDocument> {
}

export class RxProgramasDatabase extends RxDB.RxDatabase {
    publicadores?: RxPublicadorCollection;
}

export default {
    RxPublicadorDocument,
    RxPublicadorCollection,
    RxProgramasDatabase
};

declare var require: any;