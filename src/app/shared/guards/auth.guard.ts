import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';


@Injectable({
    providedIn: 'root'
})


export class AuthGuard implements  CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService,
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.authService.user$.pipe(
                take(1),
                map(user => !!user),
                tap( loggedin => {
                    if ( !loggedin ) {
                        this.router.navigate(['/login']);
                    }
                })
            );
      }
}
