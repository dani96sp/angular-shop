import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mocks';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  myItems: Item[];
  constructor() { }

  ngOnInit() {
    this.myItems = ITEMS;
  }

  totalItems() {
    let total = 0;
    for (const myItems of ITEMS) {
      total += myItems.stock;
    }
    return total;
    }
}
