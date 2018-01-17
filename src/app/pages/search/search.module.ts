import { NgModule } from '@angular/core';

import { SearchRoutingModule } from './search.route';
import { SearchComponent } from './search.component';
import { HomeComponent } from './home/home.component';
import { SongComponent } from './song/song.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchService } from './search.service';

@NgModule({
    imports: [SearchRoutingModule],
    exports: [],
    declarations: [
        SearchComponent, HomeComponent,
        SongComponent, AlbumComponent, ArtistComponent
    ],
    providers: [SearchService],
})
export class SearchModule { }

