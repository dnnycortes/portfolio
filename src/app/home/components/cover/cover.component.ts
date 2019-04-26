import { Component, Output, EventEmitter, Input } from '@angular/core';


@Component({
    selector: 'cover-component',
    templateUrl: './cover.component.html',
    styleUrls: ['./cover.component.scss']
})


export class CoverComponent {
    @Input() aboutInfo: Object;
    @Output() scrollDown: EventEmitter<string> = new EventEmitter;

    onScroll( section: string ) {
        this.scrollDown.emit( section );
    }
}
