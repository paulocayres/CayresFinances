import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import {DirectivesModule} from '../../../directives/directives.module';

import {AgendaModalPage} from './agenda-modal';


@NgModule({
  declarations: [
    AgendaModalPage,
  ],
  imports: [IonicPageModule.forChild(AgendaModalPage), DirectivesModule],
  entryComponents: [AgendaModalPage],

})
export class AgendaModalPageModule {
}
