import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { UserModel } from '../models/user.model';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    private user: UserModel;

    constructor(auth: AuthenticationService) {
        auth.$user.subscribe(x => this.user = x);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (this.user) {
            const token = this.user.token;
            let request = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            return next.handle(request);
        } else {
            return next.handle(req);
        }
    }
}