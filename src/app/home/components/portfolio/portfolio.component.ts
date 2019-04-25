import { Component, OnInit } from '@angular/core';

import { PortfolioService } from '../../services/portfolio.service';


@Component({
    selector: 'portfolio-component',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent implements OnInit {
    projects: Array<any>;

    constructor(
        private portfolioService: PortfolioService
    ) {}

    ngOnInit() {
        this.getPortfolioProjects();
    }

    getPortfolioProjects() {
        this.portfolioService.getProjects().subscribe( data => {
            this.projects = data.map( e => {
                return {
                    id: e.payload.doc.id,
                    ...e.payload.doc.data()
                };
            });
        });

    }

}
