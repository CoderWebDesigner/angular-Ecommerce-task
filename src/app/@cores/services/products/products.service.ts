import { Injectable } from '@angular/core';
import * as Products from '../../../../assets/json-db/porducts.json';
import { Observable, map, of } from 'rxjs';
import { Product } from '../../../pages/products/models/product.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }

  getProducts():Observable<Product[]> {
    return of(Products).pipe(map((res:any)=>res.default))
  }
}

