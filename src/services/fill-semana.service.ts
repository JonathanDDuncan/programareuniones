import { Injectable } from '@angular/core';
import { ProgramaDatabaseService } from './programadatabase.service';
import * as RxDBTypes from '../schemas/RxProgramaDB.d';
@Injectable()
export class FillSemanaService {
    semanas: RxDBTypes.RxSemanaDocument[] | RxDBTypes.RxSemanaDocument;

    fillSemana(): Promise<string> {
        return Promise.resolve( "This Value");
    }  
}