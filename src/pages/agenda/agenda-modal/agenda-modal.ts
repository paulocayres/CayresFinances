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
    if (this.agendaUpdate.parcela[0].valor == '') {
      this.agendaUpdate.parcela[0].valor = '0';
    }
    this.agendaUpdate.parcela[0].valor =
        this.number_format(this.agendaUpdate.parcela[0].valor, 2, '.', ',');
    this.viewCtrl.dismiss(this.agendaUpdate);
  }


  number_format(number, decimals, dec_point, thousands_sep) {
    var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
    var d = dec_point == undefined ? ',' : dec_point;
    var t = thousands_sep == undefined ? '.' : thousands_sep,
        s = n < 0 ? '-' : '';
    this.i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + '',
    this.j = (this.j = this.i.length) > 3 ? this.j % 3 : 0;
    return s + (this.j ? this.i.substr(0, this.j) + t : '') +
        this.i.substr(this.j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
        (c ? d + Math.abs(n - this.i).toFixed(c).slice(2) : '');
  }
}
