import { Routes } from '@angular/router';
import { PolicyComponent } from './pages/policy/policy.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: 'policy',
    component: PolicyComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
