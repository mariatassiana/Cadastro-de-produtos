import { Injectable } from '@angular/core';
import { product } from '../produtos';
import { products } from '../mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  constructor() { }

  getprodutos(): product[] {
    return products;
  }
  getproducts(): Observable<product[]> {
    const product = of(products);
    return product;
  }
}
