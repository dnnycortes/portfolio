import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
    jobTitle: string;
    @ViewChild('about') about: ElementRef;


    ngOnInit() {
        this.jobTitle = 'Front-end Developer';
    }


    /**
     * Function executed by the dom that scrolls down to an specific section in home page
     * @param section string with the name of the section to scroll to
     */
    scrollTo( section: string ) {
        switch ( section ) {
            case 'about':
                this.about.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
        }
    }
}
