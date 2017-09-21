import { Component, OnInit } from '@angular/core';

import { CollectionService } from '../collection.service';
import { Item } from '../item';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {
  collection: Item[];

  constructor(public _CollectionService: CollectionService) { }

  ngOnInit() {
    this.collection = this._CollectionService.collection;
  }

  changeState(item: Item, state: number) {
    item.state = state;
  }
}
