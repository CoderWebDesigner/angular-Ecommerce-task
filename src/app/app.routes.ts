import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {path:'',component:LayoutComponent,loadChildren:()=>import('./pages/pages.module').then((m) => m.PagesModule)},
  {path:'**',pathMatch:'full',redirectTo: ''} //redirect to pages module
];
