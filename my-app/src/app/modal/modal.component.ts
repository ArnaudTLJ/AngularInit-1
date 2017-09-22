import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() msg;

  constructor(public activeModal: NgbActiveModal, private _Router: Router) { }

  ngOnInit() {
  }

  dismiss() {
    this.activeModal.dismiss('Cross click');
    this._Router.navigate(['list']);
  }

  close() {
    this.activeModal.close('Close click');
    this._Router.navigate(['list']);
  }
}
