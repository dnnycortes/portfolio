import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable()


export class PortfolioService {

    constructor(
        private firestore: AngularFirestore
    ) { }

    getProjects(): Observable<DocumentChangeAction<{}>[]> {
        return this.firestore.collection('portfolio-projects').snapshotChanges();
    }

}
