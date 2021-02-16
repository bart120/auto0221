import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MarkModel } from '../models/mark.model';

@Injectable({
    providedIn: 'root'
})
export class MarkService {

    constructor(private http: HttpClient) { }

    getMarks(): Observable<Array<MarkModel>> {


        /*this.http.get(environment.urlMark).subscribe(data => {
            console.log(data);
        });*/

        return this.http.get<Array<MarkModel>>(environment.urlMark);
        /*return [
            { name: 'Renault', image: 'renault.jpg' },
            { name: 'BMW', image: 'bmw.jpg' },
            { name: 'Audi', image: 'audi.jpg' }
        ];*/
    }
}