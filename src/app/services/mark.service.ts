import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators'
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

    getMarksRepeatOrderByName(): Observable<Array<MarkModel>> {
        return this.getMarksRepeat().pipe(map(data => data.sort((a, b) => a.name < b.name ? -1 : 1)));

    }

    getMarksRepeat(): Observable<Array<MarkModel>> {

        return timer(0, 10000).pipe(mergeMap(() => this.http.get<Array<MarkModel>>(environment.urlMark)));

        let obsTimer = timer(0, 10000);
        let obsData = this.http.get<Array<MarkModel>>(environment.urlMark);

        let result = obsTimer.pipe(mergeMap(() => obsData));

        //obsTimer.subscribe(x => console.log(x));

        return result;
    }
}