import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumComponent } from './album.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'album',
        component: AlbumComponent,
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
export class AlbumRoutingModule { }

export const routedComponents = [AlbumComponent];
