import { Component, ViewChildren, Input, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
declare var require: any;


@Component({
    selector: 'hero-edit',
    templateUrl: './hero-edit.component.html',
    styles: ['./hero-edit.component.less'],
    providers: [DatabaseService],
})
export class HeroEditComponent {

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
