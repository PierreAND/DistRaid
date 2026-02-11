import { Routes } from '@angular/router';
import { Register } from './presentation/register/register';

export const routes: Routes = [
  { path: 'register', component: Register },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
];
