import { Component, ElementRef, Renderer2 } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {CurrencyPipe} from '@angular/common';

/**
 * Generated class for the AgendaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({

  selector: 'page-agenda-modal',
  templateUrl: 'agenda-modal.html',
  providers: [CurrencyPipe],
})

export class AgendaModalPage {
  agendaCancel: any;
  agendaUpdate: any;
  i: any;
  j: any;
  code: any;


  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl: ViewController,
      public curr: CurrencyPipe,
      public el: ElementRef,
      public ren: Renderer2
    ){
    this.agendaCancel = navParams.get('parametro') || {
      'descricao': '',
      'recorrente': false,
      'parcelas': '',
      'periodicidade': '',
      'formaPagamento': '',
      'centroCusto': '',
      'categoria': '',
      'parcela': [{'valor': '0.00', 'sinal': false, 'vencimento': ''}]
    };

    this.agendaUpdate = JSON.parse(JSON.stringify(this.agendaCancel));


    
    // this.agendaUpdate = this.agendaCancel;
    // console.log(this.agendaCancel);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaModalPage');
  }

  ionViewWillEnter(){
    this.agendaUpdate.parcela[0].valor = this.curr.transform(this.agendaUpdate.parcela[0].valor, 'BRL', true, '1.2-2');
  }

  cancel() {
    this.viewCtrl.dismiss({'agenda': this.agendaUpdate, 'atu': false});
  }

  salvar() {
    //console.log(this.agendaUpdate.parcela[0].valor);
    //console.log(this.agendaUpdate);
    this.agendaUpdate.parcela[0].valor =
        Number(this.unformat(this.agendaUpdate.parcela[0].valor.toString()))/100;
    this.viewCtrl.dismiss({'agenda': this.agendaUpdate, 'atu': true});
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
