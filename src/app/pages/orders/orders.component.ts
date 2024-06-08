import { Component, inject } from '@angular/core';
import { OrderService } from '../../@cores/services/order/order.service';
import { AsyncPipe, DatePipe, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [DecimalPipe,DatePipe,RouterModule,AsyncPipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  _orderService=inject(OrderService)


}
