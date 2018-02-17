import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistComponent } from './artist.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
    {
        path: 'artist',
        component: ArtistComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'detail/:id', component: DetailComponent },
            { path: 'album/:id', component: AlbumComponent },
            { path: '**', component: HomeComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArtistRoutingModule { }

export const routedComponents = [ArtistComponent];
