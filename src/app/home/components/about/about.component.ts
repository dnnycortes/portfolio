import { Component, Output, EventEmitter, Input } from '@angular/core';


@Component({
    selector: 'about-component',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})


export class AboutComponent {
    @Input() technicalSkills: Array<Object>;
    @Input() aboutInfo;
    @Output() scrollDown: EventEmitter<string> = new EventEmitter;

    /**
     * Sets and emits the section to scroll down to
     */
    onScroll ( section: string ) {
        this.scrollDown.emit( section );
    }
}
