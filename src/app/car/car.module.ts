import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { CarRoutingModule } from './routing-car.module';
import { CarService } from '../services/car.service';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    MaterialModule
  ],
  providers: [
    CarService
  ]
})
export class CarModule { }
