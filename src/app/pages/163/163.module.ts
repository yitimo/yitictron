import { NgModule } from '@angular/core';
import { SharedModule } from '../../-shared';
import { CommonModule } from '@angular/common';
import { N163RoutingModule } from './163.route';
import { N163Component } from './163.component';
import { N163Service } from './163.service';

import { SearchComponent } from './search';
import { MusicComponent } from './music';

@NgModule({
    declarations: [ N163Component, SearchComponent, MusicComponent ],
    imports: [ CommonModule, SharedModule, N163RoutingModule ],
    exports: [],
    providers: [N163Service],
})
export class N163Module {}
