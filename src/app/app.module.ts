import {ErrorHandler, LOCALE_ID, NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {DirectivesModule} from '../directives/directives.module';
import {AgendaPageModule} from '../pages/agenda/agenda.module';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {FinanceProvider} from '../providers/finance/finance';

import {MyApp} from './app.component';



AgendaPageModule

    @NgModule({
      declarations: [MyApp, HomePage, ListPage],
      imports: [
        BrowserModule, IonicModule.forRoot(MyApp), AgendaPageModule, HttpModule,
        DirectivesModule
      ],
      bootstrap: [IonicApp],
      entryComponents: [
        MyApp,
        HomePage,
        ListPage,
      ],
      providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        FinanceProvider,
        {provide: LOCALE_ID, useValue: 'pt-BR'},
      ]
    }) export class AppModule {}
