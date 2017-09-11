import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MySearchPipe } from './my-search.pipe';
import { ItemListService } from './item-list/item-list.service';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    MySearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ItemListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
