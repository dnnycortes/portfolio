import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { AboutService } from './services/about.service';
import { PortfolioService } from './services/portfolio.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent  implements OnInit {
    aboutInfo: Object;
    technicalSkills: Array<Object>;
    projects: Array<Object>;
    @ViewChild('about') about: ElementRef;
    @ViewChild('portfolio') portfolio: ElementRef;
    @ViewChild('contact') contact: ElementRef;


    constructor(
        private aboutService: AboutService,
        private portfolioService: PortfolioService
    ) {}


    ngOnInit() {
        this.getAboutInfo();
        this.getTechnicalSkills();
        this.getPortfolioProjects();
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
            case 'portfolio':
                this.portfolio.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
            case 'contact':
                this.contact.nativeElement.scrollIntoView( { behavior: 'smooth', block: 'start' } );
                break;
        }
    }

    /**
     * Funciton to get all the about information from the service
     */
    getAboutInfo() {
        this.aboutService.getAboutConfig().subscribe( data => {
            this.aboutInfo = data;
        });
    }

    /**
     * Function to get a list of all technical skills frmo the service
     */
    getTechnicalSkills() {
        this.aboutService.getTechnicalSkills().subscribe( data => {
            this.technicalSkills = data;
        });
    }

    getPortfolioProjects() {
        this.portfolioService.getProjects().subscribe( data => {
            this.projects = data;
        });
    }

}
