import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()


export class PortfolioService {

    constructor(
        private firestore: AngularFirestore
    ) { }

    /**
     * Function to get all portfolio projects from database
     */
    getProjects() {
        return this.firestore.collection('portfolio-projects').snapshotChanges().pipe( map( action => {
            return action.map( a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        }));
    }
}
