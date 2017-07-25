/**
 * AppRouting 根路由
 * 负责：
 *      1. 配置根缺省路由
 *      2. 配置懒加载模块(子路由)
 *      3. 一级守卫路由配置
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeIndexComponent } from './home/index/home-index.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeIndexComponent
    },
    { path: '', component: HomeIndexComponent },
    { path: '**', component: HomeIndexComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
    declarations: [],
    providers: []
})
export class AppRoutingModule { }
