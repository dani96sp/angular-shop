import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MySearchPipe } from './my-search.pipe';
import { ItemListService } from './item-list/item-list.service';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './order/cart/cart.component';
import { CartService } from './order/cart/cart.service';
import { FormComponent } from './order/cart/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'item-list', component: ItemListComponent },
  { path: 'order',     component: OrderComponent },
  { path: '',     component: ItemListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    MySearchPipe,
    OrderComponent,
    CartComponent,
    FormComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ItemListService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
