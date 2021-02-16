import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AddComponent } from './car/add/add.component';
import { ListComponent } from './car/list/list.component';
import { HomeComponent } from './master/home/home.component';
import { NotfoundComponent } from './master/notfound/notfound.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'car/list', component: ListComponent },
    { path: 'car/add', component: AddComponent },
    { path: 'auth/login', component: LoginComponent },

    { path: '404', component: NotfoundComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: '**', redirectTo: '404' }
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule { }