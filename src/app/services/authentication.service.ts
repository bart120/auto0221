import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private user?: UserModel;
    private subjectUser = new BehaviorSubject<UserModel>(null);

    get $user(): Observable<UserModel> {
        return this.subjectUser.asObservable();
    }

    constructor(private router: Router) {
        if (sessionStorage.getItem('USER') != null) {
            this.user = JSON.parse(sessionStorage.getItem('USER') || '{}') as UserModel;
            this.subjectUser.next(this.user);
            console.log('next const service');
        }
    }

    login(login: string, password: string): void {
        //appel serveur
        this.user = { name: login, token: 'SFFdsfdsf656g1sgq5DSsdqgsg59SGGDS' };
        sessionStorage.setItem('USER', JSON.stringify(this.user));
        this.subjectUser.next(this.user);
        this.router.navigate(['/home']);
    }

    logout(): void {
        this.user = null;
        sessionStorage.removeItem('USER');
        this.subjectUser.next(null);
        this.router.navigate(['/home']);
    }

}