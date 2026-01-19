import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'registration',
    loadComponent: () =>
      import('./pages/registration/registration.component')
        .then(m => m.RegistrationComponent)
  },
  {
    path: '',
    redirectTo: 'registration',
    pathMatch: 'full'
  }
];
