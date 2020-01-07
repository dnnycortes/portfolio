import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/guards/auth.guard';


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        AngularFireModule.initializeApp( environment.firebase ),
        AngularFirestoreModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
    ],
    providers: [
        AngularFirestore,
        AuthService,
        AuthGuard
    ],
    bootstrap: [
        AppComponent
    ]
})


export class AppModule { }
