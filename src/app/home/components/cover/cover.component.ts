import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'cover-component',
    templateUrl: './cover.component.html',
    styleUrls: ['./cover.component.scss']
})


export class CoverComponent implements OnInit {
    jobTitle: string;
    name: string;
    @Output() scrollDown: EventEmitter<string> = new EventEmitter;

    ngOnInit() {
        this.jobTitle = 'Front-end Developer';
        this.name = 'Daniela Muñoz';
    }

    onScroll( section: string ) {
        this.scrollDown.emit( section );
    }
}
