import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './notfound.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '**',
                component: NotFoundComponent
            }
        ])
    ],
    declarations: [NotFoundComponent],
    exports: [RouterModule]
})
export class NotFoundRoutingModule { }
