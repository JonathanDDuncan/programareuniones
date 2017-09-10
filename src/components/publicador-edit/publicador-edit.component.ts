import { Component, ViewChildren, Input, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
declare var require: any;


@Component({
    selector: 'publicador-edit',
    templateUrl: './publicador-edit.component.html',
    styles: ['./publicador-edit.component.less'],
    providers: [DatabaseService],
})
export class PublicadorEditComponent {

    @Input('hero') hero: any;
    @Output('done') done = new EventEmitter();

    constructor(
        private databaseService: DatabaseService
    ) { }

    async submit() {
        await this.hero.save();
        this.done.emit(true);
    }

    async cancel() {
        this.hero.resync();
        this.done.emit(false);
    }
}
