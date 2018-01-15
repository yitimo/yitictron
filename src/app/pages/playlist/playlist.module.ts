import { NgModule } from '@angular/core';

import { PlaylistRoutingModule } from './playlist.route';
import { PlaylistComponent } from './playlist.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [PlaylistRoutingModule],
    exports: [],
    declarations: [PlaylistComponent, HomeComponent],
    providers: [],
})
export class PlaylistModule { }

