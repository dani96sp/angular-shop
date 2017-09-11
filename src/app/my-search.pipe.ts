import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item-list/item.model';

@Pipe({
  name: 'mySearch'
})
export class MySearchPipe implements PipeTransform {

  transform(items: Item[], atribute: string, search: string): Item[] {
    if (search) {
      return items.filter(
        item => {if (item.name.toLowerCase().indexOf(search.trim().toLowerCase()) !== -1) {
         return item[atribute];
        }}
      );

    } else {
      return items;
    }

  }

}
