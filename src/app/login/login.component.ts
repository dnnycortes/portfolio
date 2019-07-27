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

        console.log( control.hasError('required') && control.touched );

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
}
