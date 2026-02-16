import { Routes } from '@angular/router';
import { Register } from './presentation/register/register';
import { Login } from './presentation/login/login';
import { Home } from './presentation/home/home';
import { BossComponent } from './presentation/boss/boss';
import { BossDetail } from './presentation/boss-details/boss-details';
import { ProfilComponent } from './presentation/profil/profil';
import { RaidAdminComponent } from './presentation/raid-admin/raid-admin';

export const routes: Routes = [
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'boss', component: BossComponent },
  {path: 'boss/:id', component: BossDetail},
  { path: 'profil', component: ProfilComponent },
  { path: 'raid-admin/:id', component: RaidAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];