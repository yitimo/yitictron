import { NgModule } from '@angular/core';
import { SharedModule } from '../../-shared';

import { SearchRoutingModule } from './search.route';
import { SearchComponent } from './search.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongComponent } from './song/song.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchService } from './search.service';

@NgModule({
    imports: [SharedModule, SearchRoutingModule],
    exports: [],
    declarations: [
        SearchComponent, PlaylistComponent,
        SongComponent, AlbumComponent, ArtistComponent
    ],
    providers: [SearchService],
})
export class SearchModule { }

