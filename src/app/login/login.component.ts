import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { }


    ngOnInit() {
        this.buildForm();
    }

    buildForm(){
        this.loginForm = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            password: ['', [
                Validators.required
            ]]
        })
    }

    getError( controlName: string ) {
        let error = '';
        const control = this.loginForm.get( controlName );

        if ( control.touched && control.errors ) {
            error = JSON.stringify( control.errors );
        }
        return error;
    }
}
