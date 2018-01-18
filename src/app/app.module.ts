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

import { NavControlComponent, NavSearchComponent, NavLeftComponent } from './+navigate';
import { SearchModule, PlaylistModule } from './pages';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent, HomeComponent,
        NavControlComponent, NavSearchComponent, NavLeftComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        CoreModule,
        SearchModule,
        PlaylistModule,
        NotFoundRoutingModule // 404 page
    ],
    entryComponents: []
})
export class AppModule {}
