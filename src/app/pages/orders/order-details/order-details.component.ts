import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../../../@cores/services/order/order.service';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Order } from '../models/order.interface';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent implements OnInit, OnDestroy {

  _route = inject(ActivatedRoute);
  _orderService = inject(OrderService)
  notifier = new Subject();
  order!:Order;
  ngOnInit(): void {
    this.getParam()
  }
  getParam() {
    this._route.params.pipe(
      takeUntil(this.notifier)
    ).subscribe({
      next: (res: Params) => {
        this.getOrderDetails(res['orderId'])
      }
    })
  }

  getOrderDetails(orderId:number) {
    this._orderService.getOrder(orderId).pipe(
      takeUntil(this.notifier)
    ).subscribe({
      next: (res: Order) => {
        console.log(res)
        this.order=res
      }
    })
  }
  ngOnDestroy(): void {
    this.notifier.next(true)
    this.notifier.complete()
  }


}
