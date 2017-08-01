import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { WeiboGuard } from './-core';

export const ROUTES: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'weibo', loadChildren: './weibo/weibo.module#WeiboModule', canActivate: [WeiboGuard] },
  { path: '163', loadChildren: './163/163.module#N163Module' },
  { path: '',      redirectTo: 'home', pathMatch: 'full' },
  { path: '**',    redirectTo: 'home', pathMatch: 'full' }
];
