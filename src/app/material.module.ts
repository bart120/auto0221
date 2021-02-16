import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    /*imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatCardModule
    ],*/
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ],
})
export class MaterialModule { }