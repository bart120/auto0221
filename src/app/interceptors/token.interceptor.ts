import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';


export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = 'bob';
        let request = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next.handle(request);
    }
}