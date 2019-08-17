import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';

import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loginErrorMessage: String;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) { }


    ngOnInit() {
        this.buildForm();
    }

    /**
     * Function to build a Reactive Form for Login
     */
    buildForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            password: ['', [
                Validators.required
            ]]
        });
    }

    /**
     * Function that analizes if there's a required error in the form
     * @param controlName string with the name of the control to validate
     * @return boolean
     */
    getRequiredError( controlName: string ): boolean {
        const control = this.loginForm.get( controlName );

        return (
            control.hasError('required') && control.touched
        );
    }

    /**
     * Function that analizes if there's an email format error
     * @return boolean
     */
    getEmailError(): boolean {
        const emailControl = this.loginForm.get('email');

        return (
            emailControl.hasError('email') && emailControl.touched
        );
    }

    /**
     * Function that tries to Sing In with the user's data added by the login form
     * @param value object with user's data
     */
    onLogin( value ) {
        this.authService.doLogin( value )
        .then( res => {
            this.loginErrorMessage = '';
            this.router.navigateByUrl('/portfolio-admin');
        }, err => {
            this.loginErrorMessage = err.message;
        });
    }
}
