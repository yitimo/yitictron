import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { AppRoutingModule } from './app.routes';
import { NotFoundRoutingModule } from './notfound';
import { CoreModule } from './-core';
import { SharedModule } from './-shared';

import 'hammerjs';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    NotFoundRoutingModule // 404 page
  ],
  entryComponents: []
})
export class AppModule {}
