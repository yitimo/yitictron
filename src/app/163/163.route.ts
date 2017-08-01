import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { N163Component } from './163.component';

const routes: Routes = [
    { path: '', component: N163Component },
    { path: '**', component: N163Component }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class N163RoutingModule {}
