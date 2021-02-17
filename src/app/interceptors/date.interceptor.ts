import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { isDate } from "moment";
import { Observable } from "rxjs";

export class DateInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //console.log("avant");
        //return next.handle(req).pipe(map(x => { console.log("après"); return x }));

        if ((req.method === 'POST' || req.method === 'PUT') && req.body !== null) {
            for (const key of Object.keys(req.body)) {
                const value = req.body[key];
                if (isDate(value)) {
                    const utc = Date.UTC(value.getFullYear(), value.getMonth(), value.getDate());
                    req.body[key] = new Date(utc);
                }
            }
        }
        return next.handle(req);
    }
}