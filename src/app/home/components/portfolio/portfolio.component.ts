import { Component, Input } from '@angular/core';


@Component({
    selector: 'portfolio-component',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent {
    @Input() projects: Array<Object>;
}
