import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistComponent } from './playlist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'playlist',
        component: PlaylistComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: '**', component: HomeComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlaylistRoutingModule { }

export const routedComponents = [PlaylistComponent];
