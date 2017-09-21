import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  collection: Item[];
  form: FormGroup;
  nameCtrl: FormControl;
  referenceCtrl: FormControl;
  stateCtrl: FormControl;

  constructor(fb: FormBuilder) {
    this.nameCtrl = fb.control('', [Validators.required, Validators.minLength(2)]);
    this.referenceCtrl = fb.control('', [Validators.required, Validators.minLength(4)]);
    this.stateCtrl = fb.control(0);
    this.form = fb.group({
      nom: this.nameCtrl,
      ref: this.referenceCtrl,
      etat: this.stateCtrl
    });
  }

  ngOnInit() {
    this.collection = [
      new Item({name: 'Christophe', reference: '1234', state: 0}),
      new Item({name: 'Arnaud', reference: '4567', state: 1}),
      new Item({name: 'Thibault', reference: '9875', state: 2})
    ];
  }

  addItem() {
    this.collection.push({name: this.form.value.nom, reference: this.form.value.ref, state: this.form.value.etat});
    this.resetForm();
  }

  resetForm() {
    this.nameCtrl.setValue('');
    this.referenceCtrl.setValue('');
    this.stateCtrl.setValue(0);
  }
}
