import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input() appState: number;

  constructor(private _ElementRef: ElementRef) { }

  ngOnChanges() {
    const elementNode = this._ElementRef.nativeElement;
    const cssClass = 'card-header state-' + this.appState;

    let text: string;
    switch (this.appState) {
      case 0:
        text = 'Commande à livrer';
      break;
      case 1:
        text = 'Commande en cours de livraison';
      break;
      case 2:
        text = 'Commande livrée';
      break;
      default:
        console.log(this.appState);
      break;
    }

    elementNode.innerHTML = text;
    elementNode.className = cssClass;
  }

}
