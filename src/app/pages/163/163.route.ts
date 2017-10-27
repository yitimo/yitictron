import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { N163Component } from './163.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
        path: '163',
        component: N163Component,
        children: [
            { path: '', component: SearchComponent },
            { path: 'search', component: SearchComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class N163RoutingModule {}
