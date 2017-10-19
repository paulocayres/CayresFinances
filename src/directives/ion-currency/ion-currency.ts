import {CurrencyPipe} from '@angular/common';
import { ContentChild, Directive, HostListener } from '@angular/core';
import {TextInput} from 'ionic-angular';

/**
 * Generated class for the CurrencyDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */

@Directive({
  selector: '[ion-currency]',  // Attribute selector
  providers: [CurrencyPipe],
})

export class IonCurrencyDirective{
  @ContentChild(TextInput) ion_input: TextInput;

  orig: string;
  valor: number;
  ini: boolean = false;

  constructor(
    private cur: CurrencyPipe,
    ){
      console.log('construiu diretiva');
    }


  @HostListener('keyup', ['$event'])
  onkkeyup() {

    //this.key = event.key;


    
    
    if (isNaN(Number(this.unformat(this.ion_input.value)))) {
      this.ion_input.setValue(this.ion_input.value.toString().substr(0,this.ion_input.value.toString().length - 1));
      this.orig = this.ion_input.value.toString();
      this.orig = this.unformat(this.orig);
      this.orig = this.orig.substring(0, 14);
      this.valor = Number(this.orig);
      this.orig = this.cur.transform(this.valor/100, 'BRL', true, '1.2-2');
      this.ion_input.setValue(this.orig);
    }else {
      this.orig = this.ion_input.value.toString();
      this.orig = this.unformat(this.orig);
      this.orig = this.orig.substring(0, 14);
      this.valor = Number(this.orig);
      this.orig = this.cur.transform(this.valor/100, 'BRL', true, '1.2-2');
      this.ion_input.setValue(this.orig);
    }

    if (this.ion_input.value == 'R$0,00'){
      this.ion_input.setValue('R$0,00');
    }

    if (isNaN(Number(this.unformat(this.ion_input.value)))) {
      this.ion_input.setValue('R$0,00');
    }
  }

  
  unformat(valor: string) {
    valor = valor.replace('.','');
    valor = valor.replace('.','');
    valor = valor.replace('.','');
    valor = valor.replace('.','');
    valor = valor.replace('.','');
    valor = valor.replace('.','');
    valor = valor.replace('.','');    
    valor = valor.replace(',', '');
    valor = valor.replace(',', '');
    valor = valor.replace(',', '');
    valor = valor.replace('R$', '');
    return valor;
  }
}
