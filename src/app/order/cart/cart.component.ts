import { Component, OnInit } from '@angular/core';
import { Item } from '../../item-list/item.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  myItems: Item[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.myItems = this.cartService.cart.items;
  }

}
