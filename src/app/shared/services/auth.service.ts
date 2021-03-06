import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    user$: Observable<firebase.User>;

    constructor(
        public afAuth: AngularFireAuth
    ) {
        this.user$ = this.afAuth.authState;
    }

    /**
     * Function that connects with firebase auth and signs in
     * @param value Object with email and password data
     */
    oAuthLogin( value ) {
        return new Promise<any>( (resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword( value.email, value.password )
            .then( res => {
                resolve( res );
            }, err => reject(err) );
        });
    }

    /**
     * Function that logs out the user
     */
    logout() {
        return this.afAuth.auth.signOut();
    }
}
