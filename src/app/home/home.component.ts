import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent {
    @ViewChild('about') about: ElementRef;
    @ViewChild('portfolio') portfolio: ElementRef;


    /**
     * Function executed by the dom that scrolls down to an specific section in home page
     * @param section string with the name of the section to scroll to
     */
    scrollTo( section: string ) {
        switch ( section ) {
            case 'about':
                this.about.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
            case 'portfolio':
                this.portfolio.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
        }
    }
}
