import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
    user: UserModel;

    constructor(auth: AuthenticationService,
        private snackBar: MatSnackBar,
        private router: Router) {
        auth.$user.subscribe(x => this.user = x);
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.user) {
            return true;
        } else {
            this.snackBar.open('Non non non!!!', 'OK');
            this.router.navigate(['/auth/login']);
            return false;
        }
    }
}
