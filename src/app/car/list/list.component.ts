import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarModel } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
import { MarkService } from 'src/app/services/mark.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  //cars?: Array<CarModel>;
  $cars?: Observable<Array<CarModel>>;

  constructor(private servCar: CarService, private servMark: MarkService) { }

  ngOnInit(): void {
    /*this.servCar.getCars().pipe(map(x => {
      x.map(item => item.$mark = this.servMark.getMarkById(item.markID));
      return x;
    })).subscribe(data => this.cars = data);*/

    this.$cars = this.servCar.getCars().pipe(map(x => {
      x.map(item => item.$mark = this.servMark.getMarkById(item.markID));
      return x;
    }));
  }

}
