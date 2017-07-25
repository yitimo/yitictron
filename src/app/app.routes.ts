import { Routes } from '@angular/router';
import { HomeComponent } from './home';

export const ROUTES: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: '',      redirectTo: 'home', pathMatch: 'full' },
  { path: '**',    redirectTo: 'home', pathMatch: 'full' }
];
