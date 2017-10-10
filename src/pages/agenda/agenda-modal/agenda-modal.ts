import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';


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
})

export class AgendaModalPage {
  agendaCancel: any;
  agendaUpdate: any;
  i: any;
  j: any;
  code: any;


  constructor(
      public navCtrl: NavController, public navParams: NavParams,
      public viewCtrl: ViewController) {
    this.agendaCancel = navParams.get('parametro') || {
      'descricao': '',
      'recorrente': false,
      'parcelas': '',
      'periodicidade': '',
      'formaPagamento': '',
      'centroCusto': '',
      'categoria': '',
      'parcela': [{'valor': 'R$0,00', 'sinal': '', 'vencimento': ''}]
    };
    this.agendaUpdate = JSON.parse(JSON.stringify(this.agendaCancel));
    // this.agendaUpdate = this.agendaCancel;
    // console.log(this.agendaCancel);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaModalPage');
  }

  cancel() {
    this.viewCtrl.dismiss(this.agendaCancel);
  }

  salvar() {
    console.log(this.agendaUpdate.parcela[0].valor);
    console.log(this.agendaUpdate);
    this.agendaUpdate.parcela[0].valor =
        this.unformat(this.agendaUpdate.parcela[0].valor.toString());
    this.viewCtrl.dismiss(this.agendaUpdate);
  }

  unformat(valor: string) {
    valor = valor.replace('.', '');
    valor = valor.replace('.', '');
    valor = valor.replace('R$', '');
    valor = valor.replace('R$', '');
    valor = valor.replace(',', '.');
    valor = valor.replace(',', '.');
    return valor;
  }
}
