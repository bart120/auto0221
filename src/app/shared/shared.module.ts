import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        MatGridListModule,
        MatCardModule
    ],
    exports: [
        FooterComponent
    ],
    providers: [],
})
export class SharedModule { }