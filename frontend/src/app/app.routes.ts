import { Routes } from '@angular/router';
import { Register } from './presentation/register/register';
import { Login } from './presentation/login/login';
import { Home } from './presentation/home/home';

export const routes: Routes = [
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
