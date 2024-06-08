import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product.interface';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductsService } from '../../../../@cores/services/products/products.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnDestroy{

  // data is required for product component
  @Input({required:true}) data!:Product;

  notifier = new Subject();
  _productService=inject(ProductsService)
  update(productId:number,quantity:number){
    this._productService.editProductQuantity(productId,quantity).pipe(
      takeUntil(this.notifier)
    ).subscribe({
      next:(res:any)=>{
        this.data=res
        console.log(res)
      }
    })
  }
  ngOnDestroy(): void {
    this.notifier.next(true)
    this.notifier.complete()
  }
}
