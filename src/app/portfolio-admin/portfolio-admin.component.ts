import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-portfolio-admin',
    templateUrl: './portfolio-admin.component.html',
    styleUrls: ['./portfolio-admin.component.scss']
})


export class PortfolioAdminComponent implements OnInit {
    currentUser: Object;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.getCurrentUser();
    }

    /**
     * Function to get current user data, right after he was logged in
     */
    getCurrentUser() {
        this.authService.user$.subscribe( (user) => {
            this.currentUser = user;
            console.log( this.currentUser );
        });
    }

    /**
     * Function that connects to the service to log out the user
     */
    logout() {
        this.authService.logout().then( () => {
            this.router.navigateByUrl('/login');
        });
    }

}
