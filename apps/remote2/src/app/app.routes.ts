import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@dynamic-module-federation/remote2-lib').then((m) => m.routes),
  },
];
