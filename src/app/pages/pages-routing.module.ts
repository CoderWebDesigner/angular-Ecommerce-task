import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./products/products.component').then(component => component.ProductsComponent) },
  {
    path: 'orders', children: [
      { path: '', loadComponent: () => import('./orders/orders.component').then(component => component.OrdersComponent) },
      { path: 'details/:orderId', loadComponent: () => import('./orders/order-details/order-details.component').then(component => component.OrderDetailsComponent) },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
