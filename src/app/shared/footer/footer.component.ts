import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MarkModel } from 'src/app/models/mark.model';
import { MarkService } from 'src/app/services/mark.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    marks: Array<any> = [];

    subscripton?: Subscription;

    //private servMark: MarkService;

    constructor(private servMark: MarkService) {
        //this.servMark = servMark;
    }

    ngOnInit(): void {
        /*this.marks = [
            { name: 'Renault', image: 'renault.jpg' },
            { name: 'BMW', image: 'bmw.jpg' },
            { name: 'Audi', image: 'audi.jpg' }
        ];*/
        //this.marks = this.servMark.getMarks();
        this.subscripton = this.servMark.getMarksRepeatOrderByName().subscribe(data => {
            this.marks = data;
        },
            err => { console.warn(err); },
            () => { console.log('complete') });
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscripton?.unsubscribe();
    }

    stop(): void {
        this.subscripton?.unsubscribe();
    }
}
