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


  agendas: Array<string>;
  agendaSelected: any;
  idSelected: any;
  id: any;
  select: boolean = false;
  agendaPage: any = AgendaPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
    //this.finances.getAgendas().subscribe(agendas => {this.agendas = agendas});
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter AgendaPage');
    this.finances.getAgendas().subscribe(agendas => {this.agendas = agendas});
  }




  constructor(
      public navCtrl: NavController, public navParams: NavParams,
      public finances: FinanceProvider, public modalCtrl: ModalController,
      public actionSheet: ActionSheetController,
      public alertCtrl: AlertController) {
  }


  goPage(agenda) {
    if (this.select == true) {
      this.select = false;
      this.idSelected = null;
    } else {
      this.navCtrl.push(AgendaDetalhePage, {'agenda': agenda});
      this.select = false;
      this.idSelected = null;
    }
  }

  insert() {
    let modal = this.modalCtrl.create(AgendaModalPage);
    modal.onDidDismiss(obj => {
      if (obj !== undefined){
        if (obj.atu){
          this.finances.insert(obj.agenda).subscribe(response => {
            console.log(response),
            this.navCtrl.getActive().instance.ionViewWillEnter()
          });
        }
        this.navCtrl.getActive().instance.ionViewWillEnter();
      }
    });
    modal.present();
  }

  update() {
    let modal = this.modalCtrl.create(AgendaModalPage, {parametro: this.agendaSelected});
    modal.onDidDismiss( obj => {
      if (obj !== undefined){
        if (obj.atu){
          this.select = false;
          this.idSelected = null;
          this.finances.update(obj.agenda).subscribe(response => {
            console.log(response),
            this.navCtrl.getActive().instance.ionViewWillEnter()
          });
        }
      this.navCtrl.getActive().instance.ionViewWillEnter();
      }
    });
    modal.present();
  }


  delete() {
    this.showConfirm();
  }

  excluir() {
    this.finances.excluir(this.agendaSelected).subscribe(response => {
      console.log(response),
      this.navCtrl.getActive().instance.ionViewWillEnter()
    });
    this.select = false;
    this.idSelected = null;
  }

  buttons(agenda, id) {
    this.select = true;
    this.idSelected = id;
    this.agendaSelected = agenda;
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
            this.excluir();
          }
        }
      ]
    });
    confirm.present();
  }
}
