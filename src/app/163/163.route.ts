import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { N163Component } from './163.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
        path: '',
        component: N163Component,
        children: [
            { path: 'search/:words', component: SearchComponent }
        ]
    },
    { path: '**', component: N163Component }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class N163RoutingModule {}
