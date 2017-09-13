import { Cart } from './cart.model';
import { Injectable } from '@angular/core';
import { Item } from '../../item-list/item.model';


@Injectable()
export class CartService {
    cart: Cart;
    constructor() {
        this.cart = new Cart();
        this.cart.items = new Array<Item>();
     }

     // tslint:disable-next-line:use-life-cycle-interface
     ngOnInit() {

     }

      addItem(item: Item) {
       this.cart.items.push(item);
       console.log(this.cart);
      }

}
