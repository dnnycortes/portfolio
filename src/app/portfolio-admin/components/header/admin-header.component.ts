import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';



@Component({
    selector: 'admin-header',
    templateUrl: './admin-header.component.html',
    styleUrls: ['./admin-header.component.scss']
})


export class AdminHeaderComponent implements OnInit {
    @Input() currentUser;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() {
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
