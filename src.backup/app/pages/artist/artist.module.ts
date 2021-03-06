import { NgModule } from '@angular/core';
import { SharedModule } from '../../-shared';

import { ArtistService } from './artist.service';

import { ArtistRoutingModule } from './artist.route';
import { ArtistComponent } from './artist.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
    imports: [SharedModule, ArtistRoutingModule],
    exports: [],
    declarations: [ArtistComponent, HomeComponent, DetailComponent, AlbumComponent],
    providers: [ArtistService],
})
export class ArtistModule { }

