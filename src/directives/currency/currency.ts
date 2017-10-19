import {CurrencyPipe} from '@angular/common';
import {ContentChild, Directive, HostListener} from '@angular/core';
import {TextInput} from 'ionic-angular';


/**
 * Generated class for the CurrencyDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */


@Directive({
  selector: '[pcc-currency]',  // Attribute selector
  providers: [CurrencyPipe],
})

export class CurrencyDirective {
  @ContentChild(TextInput) ion_input: TextInput;
  orig: string;
  key: string;
  valor: string;
  keyCode: number;
  which: number;
  i: boolean = false;

  @HostListener('keyUp', ['$event'])
  onkeyup(event: KeyboardEvent) {

    this.key = event.key
    this.keyCode = event.keyCode;
    this.which = event.which;
    
    
    //alert(this.key);
    //alert(this.keyCode);
    //alert(this.which);
    if (isNaN(Number(this.unformat(this.ion_input.value.toString())))) {
      this.ion_input.setValue('0.00');
      // console.log('Deu NaN');
    }

    if (!this.i) {
      this.orig = this.ion_input.value.toString();
      // console.log('Capturou Primeiro Orig: ' + this.orig);
      this.i = true;
    } else if (this.key >= '0' && this.key <= '9') {
      this.orig = this.ion_input.value.toString();
      // console.log('Capturou Novo Orig: ' + this.orig);
    } else if (this.keyCode == 8 || this.keyCode == 46) {
      this.orig = this.ion_input.value.toString() || '0';
      // console.log('Capturou Novo Orig Delete: ' + this.orig);
    }
    this.orig = this.unformat(this.orig);
    this.orig = this.unformat(this.orig);
    this.orig = this.orig.substring(0, 11);
    this.valor = this.orig.substring(0, this.orig.length - 2) + '.' +
        this.orig.substring(this.orig.length - 2, this.orig.length);
    // console.log('Iseriu decimal Valor: ' + this.valor);
    this.valor = this.cur.transform(this.valor, 'BRL', true, '1.2-2');
    // console.log('Aplicou Pipe Valor: ' + this.valor);
    this.ion_input.setValue(this.valor);
  }



  constructor(
      private cur: CurrencyPipe,
  ) {}

  unformat(valor: string) {
    valor = valor.replace('.', '');
    valor = valor.replace(',', '');
    valor = valor.replace('R$', '');
    return valor;
  }
}
