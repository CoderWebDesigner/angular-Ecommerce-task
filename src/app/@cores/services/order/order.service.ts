import { Injectable, inject } from '@angular/core';
import { Observable, of, map, combineLatest } from 'rxjs';
import * as Orders from '../../../../assets/json-db/orders.json';
import { Order } from '../../../pages/orders/models/order.interface';
import { ProductsService } from '../products/products.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  _productService = inject(ProductsService);
  _userService = inject(UserService);
  constructor() { }
  getOrders() {
    return combineLatest([of(Orders).pipe(map((res: any) => res.default)), this._productService.getProducts(), this._userService.getUsers()]).pipe(
      map(([orders, products, users]) => {
        return orders.map((order: Order) => {
          const TotalPrice = order.Products.reduce((sum: number, orderProduct: any) => {
            const product = products.find(p => p.ProductId === orderProduct.ProductId);
            return sum + (product ? product.ProductPrice * orderProduct.Quantity : 0);
          }, 0);
          const Products = order.Products.map(product => {
            return { ...product, ...products.find(obj => obj.ProductId === product.ProductId) }
          })
          const User = users.find(user => user.Id === order.UserId)
          return { ...order, TotalPrice, User ,Products};
        });
      })
    );
  }
  getOrder(orderId: number): Observable<Order> {
    return this.getOrders().pipe(map(data => data.find((order: Order) => order.OrderId == orderId)))
  }
  addOrder(order: Order) {
    Orders.push(order)
    return of(Orders)
  }
}


