import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongComponent } from './song/song.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';

const routes: Routes = [
    {
        path: 'search',
        component: SearchComponent,
        children: [
            { path: '', redirectTo: '/', pathMatch: 'full'},
            { path: 'playlist/:words', component: PlaylistComponent },
            { path: 'song/:words', component: SongComponent },
            { path: 'album/:words', component: AlbumComponent },
            { path: 'artist/:words', component: ArtistComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRoutingModule { }

export const routedComponents = [SearchComponent];
