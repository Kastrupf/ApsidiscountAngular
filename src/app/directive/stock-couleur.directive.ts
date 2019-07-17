import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appStockCouleur]'
})
export class StockCouleurDirective {
  private _couleur: string;

  get couleur(): string {
    return this._couleur;
  }
  @Input('appStockCouleur') set couleur(value: string) {

    this._couleur = value;

    if (parseInt(this._couleur) <= 5) {
      this.rdr.setStyle(this.el.nativeElement, 'color', 'orange');
    }
    if (parseInt(this._couleur) === 0) {
      this.rdr.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
    } else if (parseInt(this._couleur) > 5) {
      this.rdr.setStyle(this.el.nativeElement, 'backgroundColor', 'green');
    }
    this.rdr.setStyle(this.el.nativeElement,'text-align','center');

  }
  constructor(private el: ElementRef, private rdr: Renderer2) {
    // this.el.nativeElement.style.color = 'black';
  }

}
