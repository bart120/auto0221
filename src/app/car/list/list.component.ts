import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  cars?: Array<CarModel>;
  $cars?: Observable<Array<CarModel>>;

  constructor(private servCar: CarService,
    private servMark: MarkService,
    private snackBar: MatSnackBar) { }

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

  onDelete(id: number): void {
    this.servCar.deleteCar(id).subscribe(x => {
      this.snackBar.open(`La voiture ${x.model} est supprimée`, 'OK', { verticalPosition: 'top', duration: 3000 });
      //this.cars?.splice(this.cars.findIndex(x => x.id === id), 1);
      this.$cars = this.servCar.getCars().pipe(map(x => {
        x.map(item => item.$mark = this.servMark.getMarkById(item.markID));
        return x;
      }));
    });
  }

}
