import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import localeFr from '@angular/common/locales/fr';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { DateInterceptor } from './interceptors/date.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';

registerLocaleData(localeFr, 'fr');
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    MatNativeDateModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: HTTP_INTERCEPTORS, useClass: DateInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
