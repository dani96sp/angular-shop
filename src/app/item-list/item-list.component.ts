import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item.model';
import { Cart } from '../order/cart/cart.model';
import { ItemListService } from './item-list.service';
import { CartService } from '../order/cart/cart.service';
import { CartComponent } from '../order/cart/cart.component';



@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() myItem: Item;
  myItems: Item[];

  search: string;
  constructor(private itemListService: ItemListService, private cartService: CartService) { }

  ngOnInit() {
 //   const itemListService = new ItemListService();
    this.itemListService.getItemList().subscribe(myItems => this.myItems = myItems);
  }

  totalItems() {
    if (this.myItems) {
     return this.myItems.length;
    } else {
      return 0;
    }

  }

  totalStock() {
    if (this.myItems) {
      let total = 0;
      for (const cada of this.myItems) {
        total = cada.stock + total;
      }
      return total;
    } else {
      return 0;
    }

  }

    addQuantity(item: Item) {
        if (item.stock !== 0 && item.quantity < item.stock) {
        item.quantity++;
        // item.stock--;
      }
      console.log(item.quantity);
    }

    downQuantity(item: Item) {
      if (item.quantity > 0) {
        item.quantity--;
        // item.stock++;
      }
       console.log(item.quantity);
     }

  isSelected(id) {
    this.myItems.forEach(element => {
      if (element.id === id) {
        element.selected = true;
      } else {
        element.selected = false;
      }
    });
    }

  add(item: Item, value: number) {
      if (value > 0 && value <= item.stock) {
          item.quantity = value;
          console.log(item.quantity);
      }
  }

  addItemToCart(item: Item) {

      if (this.cartService.cart.items.length !== 0) {
       //   if (this.myItem.quantity !== 0) {
        if (this.cartService.cart.items.indexOf(item) !== -1) {
            console.log('El item existe dentro del carrito');
            console.log('cantidad: ' + item.quantity + ' - ' + item.id);
            this.cartService.cart.items.forEach(element => {
                if (element.id === item.id) {
                    console.log(item.quantity);
                    element.quantity += item.quantity;
                    console.log(element.quantity);
                }
            });
        } else {
             console.log('Hay items pero el item no existe dentro del carrito');
             this.cartService.addItem(item);
        }
   } else {
    console.log('No hay items y lo añade');
    this.cartService.addItem(item);
  }
}

}
