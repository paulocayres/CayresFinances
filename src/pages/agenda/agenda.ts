import {Component} from '@angular/core';
import {ActionSheetController, AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';

import {FinanceProvider} from '../../providers/finance/finance';

import {AgendaDetalhePage} from './agenda-detalhe/agenda-detalhe';
import {AgendaModalPage} from './agenda-modal/agenda-modal';



/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }


  agendas: Array<string>;
  // exclui: boolean;
  agenda: any;
  select: boolean = false;
  index: any;
  currentSelected: number = null;



  constructor(
      public navCtrl: NavController, public navParams: NavParams,
      public finances: FinanceProvider, public modalCtrl: ModalController,
      public actionSheet: ActionSheetController,
      public alertCtrl: AlertController) {
    this.finances.getAgendas().subscribe(agendas => {this.agendas = agendas});
    console.log(this.agendas);
  }


  goPage(agenda, idx) {
    console.log('entrou no gopage')

        if (this.select == true && idx == this.currentSelected) {
      this.select = false;
      this.currentSelected = null;
    }
    else {
      this.navCtrl.push(
          AgendaDetalhePage, {
            index: this.agendas.indexOf(agenda),
            nome: agenda.nome,
            data: agenda.data,
            hora: agenda.hora,
            pais: agenda.pais,
            uf: agenda.uf,
            municipio: agenda.municipio,
            codpostal: agenda.codpostal
          }

      );
      this.select = false;
      this.currentSelected = null;
    }
  }
  insert() {
    let modal = this.modalCtrl.create(AgendaModalPage);


    modal.onDidDismiss(
        (agenda) => {this.finances.insert(agenda)

        });

    modal.present();
  }

  update(agenda) {
    let modal = this.modalCtrl.create(
        AgendaModalPage,
        {parametro: agenda, index: this.agendas.indexOf(agenda)});

    modal.onDidDismiss((agenda) => {
      this.select = false;
      this.currentSelected = null;
      this.finances.update(agenda, this.index);

    });

    modal.present();
  }


  delete(agenda) {
    this.showConfirm();
  }

  excluir(agenda) {
    console.log(agenda);
    this.finances.excluir(this.agendas.indexOf(agenda));
    this.select = false;
    this.currentSelected = null;
  }

  buttons(agenda: any, idx: number) {
    this.agenda = agenda;
    this.select = true;
    this.currentSelected = idx;
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmação',
      message: 'Deseja Excluir?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Agree clicked');
            this.excluir(this.agenda);
          }
        }
      ]
    });
    confirm.present();
  }
}
