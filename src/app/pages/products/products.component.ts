import { Component, inject } from '@angular/core';
import { ProductsService } from '../../@cores/services/products/products.service';
import { ProductComponent } from './components/product/product.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent,AsyncPipe],
  providers:[ProductsService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent{
  _productService=inject(ProductsService);
}
