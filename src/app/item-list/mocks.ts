import { Item } from './item.model';

export const ITEMS: Item[] = [{
    'id': 1,
    'name': 'Item name',
    'description': 'These item is the best one',
    'stock': 7,
    'price': 14.99,
    'quantity': 0,
    'image': '../assets/item1.png',
    'selected': false
  },
  {
    'id': 2,
    'name': 'Horse Name',
    'description': 'One Horse',
    'stock': 3,
    'price': 7,
    'quantity': 0,
    'image': '../assets/item2.png',
    'selected': false
  },
  {
    'id': 3,
    'name': 'Item 3',
    'description': 'Item3',
    'stock': 0,
    'price': 34.99,
    'quantity': 0,
    'image': '../assets/item3.png',
    'selected': false
  }];
