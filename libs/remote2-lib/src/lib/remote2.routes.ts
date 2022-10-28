import { Routes } from '@angular/router';
import { FourComponent } from './components/four/four.component';
import { OneComponent } from './components/one/one.component';
import { ThreeComponent } from './components/three/three.component';
import { TwoComponent } from './components/two/two.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

export const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    providers: [],
    children: [
      {
        path: '',
        redirectTo: '1',
        pathMatch: 'full'
      },
      {
        path: '1',
        component: OneComponent,
      },
      {
        path: '2',
        component: TwoComponent,
      },
      {
        path: '3',
        component: ThreeComponent,
      },
      {
        path: '4',
        component: FourComponent,
      },
    ],
  },
];
