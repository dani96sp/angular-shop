import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-shop',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Shop';
  myItems = [{
    'id': 1,
    'name': 'Item name',
    'description': 'These item is the best one',
    'stock': 1,
    'price': 14.99
  },
  {
    'id': 2,
    'name': 'Horse Name',
    'description': 'One Horse',
    'stock': 1,
    'price': 7
  },
  {
    'id': 3,
    'name': 'Item 3',
    'description': 'Item3',
    'stock': 4,
    'price': 34.99
  }];


// totalItems() {
//   let total = 0;
//   let totalamount;
//   for (let i = 0; i < this.myItems.length; i++) {
//       if (this.myItems[i].stock) {
//           total += this.myItems[i].stock;
//           totalamount = total;
//       }
//   }
//   return total;
// }

totalItems() {
  let total = 0;
  for (const myItems of this.myItems) {
    total += myItems.stock;
  }
  return total;
  }


}
