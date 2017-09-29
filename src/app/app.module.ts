import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ENV_PROVIDERS } from './environment';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule, DialogPopupComponent } from './-shared';
import { CoreModule } from './-core';
import { QiniuModule } from './qiniu';
import { N163Module } from './163';
import { StudioModule } from './studio';
import { HomeComponent, HomeService } from './home';
import { NotFoundRoutingModule } from './notfound';

import 'hammerjs';

import '../styles/global.scss';
import '../styles/global.css';
import '../styles/icon.css';

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
    QiniuModule,
    N163Module,
    StudioModule,
    NotFoundRoutingModule
  ],
  providers: [
    ENV_PROVIDERS,
    HomeService
  ],
  entryComponents: [DialogPopupComponent]
})
export class AppModule {
  constructor() {
    //
  }
}
