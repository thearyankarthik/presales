import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component')
        .then(m => m.LoginComponent)
  },
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
    path: 'call-logs',
    loadComponent: () =>
      import('./pages/call-logs/call-logs.component')
        .then(m => m.CallLogsComponent)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
