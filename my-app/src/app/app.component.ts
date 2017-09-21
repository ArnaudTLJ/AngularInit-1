import { Component, OnInit } from '@angular/core';

import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  collection: Item[];

  constructor() {}

  ngOnInit() {
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
