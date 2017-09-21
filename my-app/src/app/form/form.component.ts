import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from '../modal/modal.component';
import { Item } from '../item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() formData: EventEmitter<Item> = new EventEmitter();

  form: FormGroup;
  nameCtrl: FormControl;
  referenceCtrl: FormControl;
  stateCtrl: FormControl;

  constructor(fb: FormBuilder, private modalService: NgbModal) {
    this.nameCtrl = fb.control('', [Validators.required, Validators.minLength(2)]);
    this.referenceCtrl = fb.control('', [Validators.required, Validators.minLength(4)]);
    this.stateCtrl = fb.control(0);
    this.form = fb.group({
      nom: this.nameCtrl,
      ref: this.referenceCtrl,
      etat: this.stateCtrl
    });
  }

  ngOnInit() {}

  sendItem() {
    const item = new Item({name: this.form.value.nom, reference: this.form.value.ref, state: this.form.value.etat});
    this.formData.emit(item);
    this.resetForm();
    this.open();
  }

  resetForm() {
    this.form.reset();
    this.nameCtrl.setValue('');
    this.referenceCtrl.setValue('');
    this.stateCtrl.setValue(0);
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'La commande a bien été ajoutée !';
  }
}
