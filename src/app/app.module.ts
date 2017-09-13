import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MySearchPipe } from './my-search.pipe';
import { ItemListService } from './item-list/item-list.service';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './order/cart/cart.component';
import { CartService } from './order/cart/cart.service';

const appRoutes: Routes = [
  { path: 'item-list', component: ItemListComponent },
  { path: 'order',     component: OrderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    MySearchPipe,
    OrderComponent,
    CartComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemListService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
