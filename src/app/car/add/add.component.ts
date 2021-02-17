import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/models/car.model';
import { MarkModel } from 'src/app/models/mark.model';
import { CarService } from 'src/app/services/car.service';
import { MarkService } from 'src/app/services/mark.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  formCar: FormGroup;
  $marks?: Observable<Array<MarkModel>>;

  constructor(private servMark: MarkService,
    private servCar: CarService,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.formCar = new FormGroup({
      model: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.min(0)]),
      dateOfCirculation: new FormControl('', [Validators.required]),
      markID: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.$marks = this.servMark.getMarks();
  }

  onSubmit(): void {
    //console.log(this.formCar);
    if (this.formCar.valid) {
      const car = this.formCar.value as CarModel;
      //console.log(car);
      this.servCar.saveCar(car).subscribe(x => {
        this.snackBar.open(`La voiture ${x.model} est enregistrée avec l'id ${x.id}`, 'OK', { verticalPosition: 'top', duration: 3000 });
        //this.router.navigate(['car/detail', x.id, x.model]);
        this.router.navigate(['car/list']);
      }, err => {
        this.snackBar.open(err, 'OK', { verticalPosition: 'top', duration: 3000, });
      })
    }
  }
}
