import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToplistComponent } from './toplist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'toplist',
        component: ToplistComponent,
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
export class ToplistRoutingModule { }

export const routedComponents = [ToplistComponent];
