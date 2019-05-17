import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
    selector: 'project-dialog',
    templateUrl: './project-dialog.component.html',
    styleUrls: ['./project-dialog.component.scss']
})


export class ProjectDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<ProjectDialogComponent>,
        @Inject( MAT_DIALOG_DATA ) public data: any
    ) { }

    ngOnInit() {
        console.log( this.data );
    }

    /**
     * Function to close the dialog
     */
    closeDialog() {
        this.dialogRef.close('pizza');
    }

}
