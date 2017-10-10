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
    //this.finances.getAgendas().subscribe(agendas => {this.agendas = agendas});
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter AgendaPage');
    this.finances.getAgendas().subscribe(agendas => {this.agendas = agendas});

  }


  agendas: Array<string>;
  // exclui: boolean;
  agenda: any;
  idSelected: any;
  id: any;
  select: boolean = false;

  agendaPage: any = AgendaPage;

  constructor(
      public navCtrl: NavController, public navParams: NavParams,
      public finances: FinanceProvider, public modalCtrl: ModalController,
      public actionSheet: ActionSheetController,
      public alertCtrl: AlertController) {
      //this.finances.getAgendas().subscribe(agendas => {this.agendas = agendas});
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


    modal.onDidDismiss(
        (agenda) => {
//this.finances.insert(agenda)
          this.finances.insert(agenda).subscribe(response => {
            
            console.log(response),
            this.navCtrl.getActive().instance.ionViewWillEnter()
             
            
          
          })
         
        });





        

    modal.present();
  }

  update(agenda) {
    let modal = this.modalCtrl.create(AgendaModalPage, {parametro: agenda});

    modal.onDidDismiss((agenda) => {
      this.select = false;
      this.idSelected = null;
      this.finances.update(agenda);
    });

    modal.present();
  }


  delete(agenda) {
    this.showConfirm(agenda);
  }

  excluir(agenda) {
    console.log(agenda);
    this.finances.excluir(agenda);
    this.select = false;
    this.idSelected = null;
  }

  buttons(id) {
    this.select = true;
    this.idSelected = id;
    // console.log(agenda);
    console.log(id);
    console.log(this.idSelected);
  }

  showConfirm(agenda) {
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
            this.excluir(agenda);
          }
        }
      ]
    });
    confirm.present();
  }
}
