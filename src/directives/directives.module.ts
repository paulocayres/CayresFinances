import { NgModule } from '@angular/core';
import { CurrencyDirective } from './currency/currency';
import { IonCurrencyDirective } from './ion-currency/ion-currency';
@NgModule({
	declarations: [CurrencyDirective,
    IonCurrencyDirective],
	imports: [],
	exports: [CurrencyDirective,
    IonCurrencyDirective]
})
export class DirectivesModule {}
