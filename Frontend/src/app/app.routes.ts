import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'registration',
    loadComponent: () =>
      import('./pages/project-registration/registration.component')
        .then(m => m.RegistrationComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component')
        .then(m => m.DashboardComponent)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
