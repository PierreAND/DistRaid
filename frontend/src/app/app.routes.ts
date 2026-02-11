import { Routes } from '@angular/router';
import { Register } from './presentation/register/register';
import { Login } from './presentation/login/login';

export const routes: Routes = [
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
