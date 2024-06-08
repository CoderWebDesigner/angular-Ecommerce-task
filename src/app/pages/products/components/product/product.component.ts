import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.interface';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  // data is required for product component
  @Input({required:true}) data!:Product
}
