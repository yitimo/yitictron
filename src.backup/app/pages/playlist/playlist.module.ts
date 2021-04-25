import { NgModule } from '@angular/core';
import { SharedModule } from '../../-shared';

import { PLaylistService } from './playlist.service';

import { PlaylistRoutingModule } from './playlist.route';
import { PlaylistComponent } from './playlist.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [SharedModule, PlaylistRoutingModule],
    exports: [],
    declarations: [PlaylistComponent, HomeComponent],
    providers: [PLaylistService],
})
export class PlaylistModule { }

