import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { AngularFirestore } from '@angular/fire/firestore';


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        AngularFireModule.initializeApp( environment.firebase ),
        AngularFireDatabaseModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        AngularFirestore
    ],
    bootstrap: [
        AppComponent
    ]
})


export class AppModule { }
