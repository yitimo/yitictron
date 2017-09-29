import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WeiboComponent } from './weibo.component';

const routes: Routes = [
    { path: '', component: WeiboComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WeiboRoutingModule {}
