import { Injectable } from '@angular/core';

import { Item } from './item';

@Injectable()
export class CollectionService {

  collection: Item[];

  constructor() {
    this.collection = [
      new Item({name: 'Christophe', reference: '1234', state: 0}),
      new Item({name: 'Arnaud', reference: '4567', state: 1}),
      new Item({name: 'Thibault', reference: '9875', state: 2})
    ];
  }

  addItem(item: Item) {
    this.collection.push(item);
  }
}
