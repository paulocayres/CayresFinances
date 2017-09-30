import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';

import {FinanceProvider} from '../../../providers/finance/finance';
import {AgendaModalPage} from '../agenda-modal/agenda-modal';

/**
 * Generated class for the AgendaDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda-detalhe',
  templateUrl: 'agenda-detalhe.html',
})
export class AgendaDetalhePage {
  agenda: any;

  constructor(
      public navCtrl: NavController, public navParams: NavParams,
      public modalCtrl: ModalController, public finance: FinanceProvider) {
    this.agenda = navParams.get('agenda');
    console.log(this.agenda);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaDetalhePage');
  }

  update(agenda) {
    let modal = this.modalCtrl.create(AgendaModalPage, {parametro: agenda});

    modal.onDidDismiss(agenda => {
      this.finance.update(agenda),
      this.agenda = JSON.parse(JSON.stringify(agenda))
    });

    modal.present();
  }
}
