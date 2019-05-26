import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../../../shared/components/project-dialog/project-dialog.component';


@Component({
    selector: 'portfolio-component',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})


export class PortfolioComponent {
    @Input() projects: Array<Object>;
    @Output() scrollDown: EventEmitter<string> = new EventEmitter;

    constructor(
        private dialog: MatDialog
    ) {}


    /**
     * Sets and emits the section to scroll down to
     */
    onScroll ( section: string ) {
        this.scrollDown.emit( section );
    }

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
