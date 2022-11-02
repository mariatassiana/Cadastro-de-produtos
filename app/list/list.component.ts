import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { products } from '../mock';
import { product } from '../produtos';
import { ProdutoServiceService } from './produto-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  selectedproduct?:product;
  Onselect(x: product): void{
    this.selectedproduct = x;
  }
  constructor(private produtoservice: ProdutoServiceService) { }


  ngOnInit(): void {
    this.getprodutos();
  }

  produto: product[] = [];

  OnSelect(product: product): void{
    this.selectedproduct = product;
  }

  eventButton(product: product){
    this.selectedproduct=product}

  getprodutos(): void {
     this.produtoservice.getproducts()
        .subscribe(product => this.produto = product);
  }
}
