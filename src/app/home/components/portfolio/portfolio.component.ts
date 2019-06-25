import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../../../shared/components/project-dialog/project-dialog.component';


@Component({
    selector: 'portfolio-component',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent {
    @Input() projects: Array<Object>;

    constructor(
        private dialog: MatDialog
    ) {}

    /**
     * Function to open a dialog that shows a project detail
     * @param project object that conatins all info related to a project
     */
    showProjectDetail( project ) {
        const dialogRef = this.dialog.open( ProjectDialogComponent, {
            panelClass: 'project-dialog',
            data: project
        });

        dialogRef.afterClosed().subscribe( res => {
            console.log(`dialog was closed `);
            console.log( res );
        });
    }
}
