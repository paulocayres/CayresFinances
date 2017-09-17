import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import {AgendaPage} from './agenda';
import {AgendaDetalhePageModule} from './agenda-detalhe/agenda-detalhe.module';
import {AgendaModalPageModule} from './agenda-modal/agenda-modal.module';


@NgModule({
  declarations: [
    AgendaPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaPage), AgendaDetalhePageModule,
    AgendaModalPageModule
  ],
})
export class AgendaPageModule {
}
