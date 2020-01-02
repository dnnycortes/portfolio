import { Component, Output, EventEmitter, Input } from '@angular/core';


@Component({
    selector: 'hero-image-component',
    templateUrl: './hero-image.component.html',
    styleUrls: ['./hero-image.component.scss']
})


export class HeroImageComponent {
    @Input() aboutInfo: Object;
    @Output() scrollDown: EventEmitter<string> = new EventEmitter;

    onScroll( section: string ) {
        this.scrollDown.emit( section );
    }
}
