import { Component, OnInit } from '@angular/core';
import { MarkService } from 'src/app/services/mark.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    marks: Array<any> = [];

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
        this.servMark.getMarksRepeatOrderByName().subscribe(data => {
            this.marks = data;
        },
            err => { console.warn(err); },
            () => { console.log('complete') });
    }
}
