import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DjradioComponent } from './djradio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'djradio',
        component: DjradioComponent,
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
export class DjradioRoutingModule { }

export const routedComponents = [DjradioComponent];
