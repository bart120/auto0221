import { Injectable } from '@angular/core';
import { MarkModel } from '../models/mark.model';

@Injectable({
    providedIn: 'root'
})
export class MarkService {

    getMarks(): Array<MarkModel> {
        return [
            { name: 'Renault', image: 'renault.jpg' },
            { name: 'BMW', image: 'bmw.jpg' },
            { name: 'Audi', image: 'audi.jpg' }
        ];
    }
}