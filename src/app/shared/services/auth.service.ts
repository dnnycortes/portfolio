import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor( public afAuth: AngularFireAuth ) { }

    /**
     * Function that connects with firebase auth and signs in
     * @param value Object with email and password data
     */
    doLogin( value ) {
        return new Promise<any>( (resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword( value.email, value.password )
            .then( res => {
                resolve( res );
            }, err => reject(err) );
        });
    }
}
