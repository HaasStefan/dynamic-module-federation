import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@dynamic-module-federation/remote1-lib').then((m) => m.routes),
  },
];
