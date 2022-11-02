import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { products } from '../mock';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  produto = products;

  constructor() { }

  ngOnInit(): void {
  }

}
