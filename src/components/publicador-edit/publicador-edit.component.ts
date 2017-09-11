import { Component, ViewChildren, Input, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';
import { ProgramaDatabaseService } from '../../services/programadatabase.service';
declare var require: any;


@Component({
    selector: 'publicador-edit',
    templateUrl: './publicador-edit.component.html',
    styles: ['./publicador-edit.component.less'],
    providers: [ProgramaDatabaseService],
})
export class PublicadorEditComponent {

    @Input('publicador') publicador: any;
    @Output('done') done = new EventEmitter();

    constructor(
        private databaseService: ProgramaDatabaseService
    ) { }

    async submit() {
        await this.publicador.save();
        this.done.emit(true);
    }

    async cancel() {
        this.publicador.resync();
        this.done.emit(false);
    }
}
