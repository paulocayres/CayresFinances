import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaModalPage } from './agenda-modal';

@NgModule({
  declarations: [
    AgendaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaModalPage),
  ],
})
export class AgendaModalPageModule {}
