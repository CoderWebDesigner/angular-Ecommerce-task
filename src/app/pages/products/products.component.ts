import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../@cores/services/products/products.service';
import { Product } from './models/product.interface';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  providers:[ProductsService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  _productService=inject(ProductsService);
  products:Product[]=[]
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this._productService.getProducts().subscribe({
      next:(res:Product[])=>{
        this.products=res
      }
    });
  }

}
