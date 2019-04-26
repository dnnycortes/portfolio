import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, AngularFirestoreCollection, DocumentSnapshot } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable()


export class AboutService {

    constructor(
        private firestore: AngularFirestore
    ) { }

    /**
     * Function to obtain all technical skills from database
     */
    getTechnicalSkills() {
        return this.firestore.collection('technical-skills').snapshotChanges().pipe( map( action => {
            return action.map( a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, ...data };
            });
        }));
    }

    /**
     * Function to get the About Configuration from database
     */
    getAboutConfig() {
        return this.firestore.doc(`about-me-config/iwRkHZtIr4p505myTVl7`).snapshotChanges().pipe( map( action => {
            const data = action.payload.data();
            const id = action.payload.id;
            return { id, ...data };
        }));
    }
}
