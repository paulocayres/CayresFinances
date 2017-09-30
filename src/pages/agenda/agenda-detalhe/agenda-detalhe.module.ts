import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import {DirectivesModule} from '../../../directives/directives.module';

import {AgendaDetalhePage} from './agenda-detalhe';

@NgModule({
  declarations: [
    AgendaDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaDetalhePage),
    DirectivesModule,
  ],
  entryComponents: [AgendaDetalhePage],

})
export class AgendaDetalhePageModule {
}
