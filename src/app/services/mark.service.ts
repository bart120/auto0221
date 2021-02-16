import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MarkModel } from '../models/mark.model';

@Injectable({
    providedIn: 'root'
})
export class MarkService {

    constructor(private http: HttpClient) { }

    getMarks(): Array<MarkModel> {

        const result = this.http.get(environment.urlMark);

        return [
            { name: 'Renault', image: 'renault.jpg' },
            { name: 'BMW', image: 'bmw.jpg' },
            { name: 'Audi', image: 'audi.jpg' }
        ];
    }
}