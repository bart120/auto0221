import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

const childRoutes: Routes = [
    { path: 'add', component: AddComponent, canActivate: [AuthenticationGuard] },
    { path: 'list', component: ListComponent },
    { path: 'detail/:id/:name', component: DetailComponent }
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule],
})
export class CarRoutingModule { }