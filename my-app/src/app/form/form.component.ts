import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CollectionService } from '../collection.service';
import { Item } from '../item';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  newItem: Item;

  constructor(private modalService: NgbModal, private _CollectionService: CollectionService) {}

  ngOnInit() {
    this.resetForm();
  }

  sendItem() {
    this._CollectionService.addItem(this.newItem);
    this.resetForm();
    this.open();
  }

  resetForm() {
    this.newItem = new Item({name: '', reference: '', state: 0});
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'La commande a bien été ajoutée !';
  }
}
