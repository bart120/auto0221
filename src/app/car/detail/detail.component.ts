import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CarModel } from 'src/app/models/car.model';
import { MarkModel } from 'src/app/models/mark.model';
import { CarService } from 'src/app/services/car.service';
import { MarkService } from 'src/app/services/mark.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [
  ]
})
export class DetailComponent implements OnInit {

  $obsCar?: Observable<CarModel>;
  $obsMark?: Observable<MarkModel>;

  constructor(private servCar: CarService, private servMark: MarkService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params.id;
    this.$obsCar = this.servCar.getCarById(id).pipe(map(x => {
      this.$obsMark = this.servMark.getMarkById(x.markID);
      return x;
    }));
  }

}
