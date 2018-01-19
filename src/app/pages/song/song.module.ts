import { NgModule } from '@angular/core';

import { SongRoutingModule } from './song.route';
import { SongComponent } from './song.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [SongRoutingModule],
    exports: [],
    declarations: [SongComponent, HomeComponent],
    providers: [],
})
export class SongModule { }

