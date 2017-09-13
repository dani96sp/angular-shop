import { Component, OnInit } from '@angular/core';
import { Item } from '../item-list/item.model';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    constructor(private cartService: CartService) { }

    ngOnInit() {
      console.log(this.cartService.cart);
    }

}
