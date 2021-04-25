import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongComponent } from './song.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'song',
        component: SongComponent,
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
export class SongRoutingModule { }

export const routedComponents = [SongComponent];
