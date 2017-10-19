webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AgendaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgendaModalPage = (function () {
    function AgendaModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.agendaCancel = navParams.get('parametro') || {
            'descricao': '',
            'recorrente': false,
            'parcelas': '',
            'periodicidade': '',
            'formaPagamento': '',
            'centroCusto': '',
            'categoria': '',
            'parcela': [{ 'valor': 'R$0,00', 'sinal': false, 'vencimento': '' }]
        };
        this.agendaUpdate = JSON.parse(JSON.stringify(this.agendaCancel));
        // this.agendaUpdate = this.agendaCancel;
        // console.log(this.agendaCancel);
    }
    AgendaModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgendaModalPage');
    };
    AgendaModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss(this.agendaCancel);
    };
    AgendaModalPage.prototype.salvar = function () {
        console.log(this.agendaUpdate.parcela[0].valor);
        console.log(this.agendaUpdate);
        this.agendaUpdate.parcela[0].valor =
            this.unformat(this.agendaUpdate.parcela[0].valor.toString());
        this.viewCtrl.dismiss(this.agendaUpdate);
    };
    AgendaModalPage.prototype.unformat = function (valor) {
        valor = valor.replace('.', '');
        valor = valor.replace('.', '');
        valor = valor.replace('R$', '');
        valor = valor.replace('R$', '');
        valor = valor.replace(',', '.');
        valor = valor.replace(',', '.');
        return valor;
    };
    return AgendaModalPage;
}());
AgendaModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-agenda-modal',template:/*ion-inline-start:"C:\Users\Cayres\projetosjs\CayresFinances\src\pages\agenda\agenda-modal\agenda-modal.html"*/'<!--\n  Generated template for the AgendaModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Editar Agenda\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Descrição:</ion-label>\n      <ion-input type="text" maxlength="21" [(ngModel)]="agendaUpdate.descricao"></ion-input>\n    </ion-item>\n    <br>\n    <ion-item>\n      <ion-label>Recorrente:</ion-label>\n      <ion-toggle checked="false" [(ngModel)]="agendaUpdate.recorrente"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Periodicidade:</ion-label>\n      <ion-input type="text" [(ngModel)]="agendaUpdate.periodicidade"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Forma de Pagamento:</ion-label>\n      <ion-input type="text" [(ngModel)]="agendaUpdate.formaPagamento"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Centro de Custo:</ion-label>\n      <ion-input type="text" [(ngModel)]="agendaUpdate.centroCusto"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Número de Parcelas:</ion-label>\n      <ion-input type="text" [(ngModel)]="agendaUpdate.parcelas"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Categoria da Agenda financeira:</ion-label>\n      <ion-input type="text" [(ngModel)]="agendaUpdate.categoria"></ion-input>\n    </ion-item>\n    <br>\n    <ion-item>\n      <ion-label>Indica Crédito:</ion-label>\n      <ion-toggle checked="false" [(ngModel)]="agendaUpdate.parcela[0].sinal"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Valor da Agenda Financeira:</ion-label>\n      <!--ion-input type="text" onkeyup="maskIt(event.target,\'###.###.###,##\',true,{pre:\'R$\',pos:\'\'},false)" [(ngModel)]="agendaUpdate.parcela[0].valor"></ion-input-->\n      <ion-input type="text" pcc-currency [(ngModel)]="agendaUpdate.parcela[0].valor"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Vencimento:</ion-label>\n      <ion-input type="text" [(ngModel)]="agendaUpdate.parcela[0].vencimento"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <button ion-button block (click)="salvar()">Salvar</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Cayres\projetosjs\CayresFinances\src\pages\agenda\agenda-modal\agenda-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], AgendaModalPage);

//# sourceMappingURL=agenda-modal.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the FinanceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FinanceProvider = (function () {
    function FinanceProvider(http) {
        this.http = http;
        this.url = 'http://192.168.0.11:3000/agendas/';
    }
    FinanceProvider.prototype.getAgendas = function () {
        return this.http.get(this.url).map(function (res) { return res.json(); });
    };
    FinanceProvider.prototype.insert = function (agenda) {
        var body = JSON.stringify(agenda);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ method: 'POST', headers: headers });
        //console.log("Entrou financesService: Update")
        //console.log('URL:' + urlPut);
        //console.log('Body: ' + body);
        //console.log('Headers:' + JSON.stringify(headers));
        //console.log('Options:' + JSON.stringify(options));
        return this.http.post(this.url, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    FinanceProvider.prototype.update = function (agenda) {
        var body = JSON.stringify(agenda);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var urlPut = this.url + agenda._id;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ method: 'PUT', headers: headers });
        //console.log("Entrou financesService: Update")
        //console.log('URL:' + urlPut);
        //console.log('Body: ' + body);
        //console.log('Headers:' + JSON.stringify(headers));
        //console.log('Options:' + JSON.stringify(options));
        return this.http.put(urlPut, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    FinanceProvider.prototype.excluir = function (agenda) {
        // this.links.splice(index, 1);
        console.log(agenda);
        var urlDelete = this.url + agenda._id;
        return this.http.delete(urlDelete)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    return FinanceProvider;
}());
FinanceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], FinanceProvider);

//# sourceMappingURL=finance.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agenda/agenda-detalhe/agenda-detalhe.module": [
		192
	],
	"../pages/agenda/agenda-modal/agenda-modal.module": [
		191
	],
	"../pages/agenda/agenda.module": [
		216
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaModalPageModule", function() { return AgendaModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_directives_module__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agenda_modal__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AgendaModalPageModule = (function () {
    function AgendaModalPageModule() {
    }
    return AgendaModalPageModule;
}());
AgendaModalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__agenda_modal__["a" /* AgendaModalPage */],
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__agenda_modal__["a" /* AgendaModalPage */]), __WEBPACK_IMPORTED_MODULE_2__directives_directives_module__["a" /* DirectivesModule */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__agenda_modal__["a" /* AgendaModalPage */]],
    })
], AgendaModalPageModule);

//# sourceMappingURL=agenda-modal.module.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaDetalhePageModule", function() { return AgendaDetalhePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_directives_module__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agenda_detalhe__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AgendaDetalhePageModule = (function () {
    function AgendaDetalhePageModule() {
    }
    return AgendaDetalhePageModule;
}());
AgendaDetalhePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__agenda_detalhe__["a" /* AgendaDetalhePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__agenda_detalhe__["a" /* AgendaDetalhePage */]),
            __WEBPACK_IMPORTED_MODULE_2__directives_directives_module__["a" /* DirectivesModule */],
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__agenda_detalhe__["a" /* AgendaDetalhePage */]],
    })
], AgendaDetalhePageModule);

//# sourceMappingURL=agenda-detalhe.module.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaDetalhePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finance_finance__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agenda_modal_agenda_modal__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AgendaDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgendaDetalhePage = (function () {
    function AgendaDetalhePage(navCtrl, navParams, modalCtrl, finance) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.finance = finance;
        this.agenda = navParams.get('agenda');
        console.log(this.agenda);
    }
    AgendaDetalhePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgendaDetalhePage');
    };
    AgendaDetalhePage.prototype.update = function (agenda) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__agenda_modal_agenda_modal__["a" /* AgendaModalPage */], { parametro: agenda });
        modal.onDidDismiss(function (agenda) {
            _this.finance.update(agenda).subscribe(function (response) {
                console.log(response);
            }),
                _this.agenda = JSON.parse(JSON.stringify(agenda));
            //this.agendaPage.ionViewDidLoad()
        });
        modal.present();
    };
    return AgendaDetalhePage;
}());
AgendaDetalhePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-agenda-detalhe',template:/*ion-inline-start:"C:\Users\Cayres\projetosjs\CayresFinances\src\pages\agenda\agenda-detalhe\agenda-detalhe.html"*/'<!--\n  Generated template for the AgendaDetalhePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Detalhe da Agenda</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-fab right top edge>\n    <button color="primary-fab" ion-fab (click)="update(agenda)">\n      <ion-icon name="create"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>{{agenda.descricao}}</ion-col>\n    </ion-row>\n    <ion-row style="font-size: 70%">\n      <ion-col col-6 style="text-align: left">Recorrente: {{agenda.recorrente ? "Sim" : "Não"}}</ion-col>\n      <ion-col col-6 style="text-align: right">Periodicidade: {{agenda.periodicidade }}</ion-col>\n    </ion-row>\n    <ion-row style="font-size: 70%">\n      <ion-col col-6 style="text-align: left">Forma de Pagamento: {{agenda.formaPagamento}}</ion-col>\n      <ion-col col-6 style="text-align: right">Centro de Custo: {{agenda.centroCusto}}</ion-col>\n    </ion-row>\n    <ion-row style="font-size: 70%">\n      <ion-col col-6 style="text-align: left">Número de Parcelas: {{agenda.parcelas}}</ion-col>\n      <ion-col col-6 style="text-align: right">Valor: {{agenda.parcela[0].sinal ? "+" : "-" }} {{agenda.parcela[0].valor | currency:\'BRL\':true:\'1.2-2\' }}</ion-col>\n    </ion-row>\n    <ion-row style="font-size: 70%">\n      <ion-col col-4 style="text-align: left">Categoria: {{agenda.categoria}}</ion-col>\n      <ion-col col-8 style="text-align: right">Data de Vencimento: {{agenda.parcela[0].vencimento }}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Cayres\projetosjs\CayresFinances\src\pages\agenda\agenda-detalhe\agenda-detalhe.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_finance_finance__["a" /* FinanceProvider */]])
], AgendaDetalhePage);

//# sourceMappingURL=agenda-detalhe.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function() { return AgendaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_directives_module__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agenda__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agenda_detalhe_agenda_detalhe_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agenda_modal_agenda_modal_module__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AgendaPageModule = (function () {
    function AgendaPageModule() {
    }
    return AgendaPageModule;
}());
AgendaPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__agenda__["a" /* AgendaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__agenda__["a" /* AgendaPage */]), __WEBPACK_IMPORTED_MODULE_4__agenda_detalhe_agenda_detalhe_module__["AgendaDetalhePageModule"],
            __WEBPACK_IMPORTED_MODULE_5__agenda_modal_agenda_modal_module__["AgendaModalPageModule"], __WEBPACK_IMPORTED_MODULE_2__directives_directives_module__["a" /* DirectivesModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_3__agenda__["a" /* AgendaPage */]]
    })
], AgendaPageModule);

//# sourceMappingURL=agenda.module.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_finance_finance__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agenda_detalhe_agenda_detalhe__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agenda_modal_agenda_modal__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgendaPage = AgendaPage_1 = (function () {
    function AgendaPage(navCtrl, navParams, finances, modalCtrl, actionSheet, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.finances = finances;
        this.modalCtrl = modalCtrl;
        this.actionSheet = actionSheet;
        this.alertCtrl = alertCtrl;
        this.select = false;
        this.agendaPage = AgendaPage_1;
        //this.finances.getAgendas().subscribe(agendas => {this.agendas = agendas});
    }
    AgendaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgendaPage');
        //this.finances.getAgendas().subscribe(agendas => {this.agendas = agendas});
    };
    AgendaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewWillEnter AgendaPage');
        this.finances.getAgendas().subscribe(function (agendas) { _this.agendas = agendas; });
    };
    AgendaPage.prototype.goPage = function (agenda) {
        if (this.select == true) {
            this.select = false;
            this.idSelected = null;
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__agenda_detalhe_agenda_detalhe__["a" /* AgendaDetalhePage */], { 'agenda': agenda });
            this.select = false;
            this.idSelected = null;
        }
    };
    AgendaPage.prototype.insert = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__agenda_modal_agenda_modal__["a" /* AgendaModalPage */]);
        modal.onDidDismiss(function (agenda) {
            //this.finances.insert(agenda)
            _this.finances.insert(agenda).subscribe(function (response) {
                console.log(response),
                    _this.navCtrl.getActive().instance.ionViewWillEnter();
            });
        });
        modal.present();
    };
    AgendaPage.prototype.update = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__agenda_modal_agenda_modal__["a" /* AgendaModalPage */], { parametro: this.agendaSelected });
        modal.onDidDismiss(function (agenda) {
            _this.select = false;
            _this.idSelected = null;
            _this.finances.update(agenda).subscribe(function (response) {
                console.log(response),
                    _this.navCtrl.getActive().instance.ionViewWillEnter();
            });
        });
        modal.present();
    };
    AgendaPage.prototype.delete = function () {
        this.showConfirm();
    };
    AgendaPage.prototype.excluir = function () {
        var _this = this;
        this.finances.excluir(this.agendaSelected).subscribe(function (response) {
            console.log(response),
                _this.navCtrl.getActive().instance.ionViewWillEnter();
        });
        this.select = false;
        this.idSelected = null;
    };
    AgendaPage.prototype.buttons = function (agenda, id) {
        this.select = true;
        this.idSelected = id;
        this.agendaSelected = agenda;
        // console.log(agenda);
        //console.log(id);
        //console.log(this.idSelected);
    };
    AgendaPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmação',
            message: 'Deseja Excluir?',
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.excluir();
                    }
                }
            ]
        });
        confirm.present();
    };
    return AgendaPage;
}());
AgendaPage = AgendaPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-agenda',template:/*ion-inline-start:"C:\Users\Cayres\projetosjs\CayresFinances\src\pages\agenda\agenda.html"*/'<!--\n  Generated template for the AgendaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="">\n          <svg enable-background="new 0 0 70 100" height="55px" id="Layer_1" version="1.1" viewBox="0 0 70 100" width="40px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="replenishment"><g id="adaptive_coding"><g><g><path d="M61,55c0,2.75-2.25,5-5,5H38c-2.75,0-5-2.25-5-5V10c0-2.75,2.25-5,5-5h18c2.75,0,5,2.25,5,5V55z" fill="#37474F"/></g><g><path d="M38,5c-2.75,0-5,2.25-5,5v45c0,0.697,0.146,1.359,0.407,1.964L53.814,5H38z" fill="#455A64"/></g><g><circle cx="47" cy="56" fill="#607D8B" r="2"/></g><g><rect fill="#607D8B" height="1" width="1" x="40" y="8"/></g><g><path d="M50,8.5C50,8.775,49.775,9,49.5,9h-6C43.225,9,43,8.775,43,8.5l0,0C43,8.225,43.225,8,43.5,8h6      C49.775,8,50,8.225,50,8.5L50,8.5z" fill="#607D8B"/></g><g><rect fill="#607D8B" height="41" width="24" x="35" y="12"/></g></g></g><g><rect fill="#00E676" height="24" width="56" x="3" y="20"/><g><path d="M11.473,40.5c-0.231-2.083-1.891-3.741-3.973-3.973v-9.055c2.082-0.231,3.741-1.89,3.973-3.973h39.055     c0.231,2.083,1.891,3.741,3.973,3.973v9.055c-2.082,0.231-3.741,1.89-3.973,3.973H11.473z" fill="#B9F6CA"/><path d="M50.101,24c0.398,1.956,1.943,3.501,3.899,3.899v8.201c-1.956,0.398-3.501,1.943-3.899,3.899H11.899     C11.501,38.044,9.956,36.499,8,36.101v-8.201c1.956-0.398,3.501-1.943,3.899-3.899H50.101L50.101,24z M51,23H11     c0,2.21-1.791,4-4,4v10c2.209,0,4,1.79,4,4h40c0-2.21,1.791-4,4-4V27C52.791,27,51,25.21,51,23L51,23z" fill="#00C853"/></g><path d="M45,30.5c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5S44.172,30.5,45,30.5L45,30.5z     M45,29.5c-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5S46.379,29.5,45,29.5L45,29.5z" fill="#00C853"/><path d="M17,30.5c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5S16.172,30.5,17,30.5L17,30.5z     M17,29.5c-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5S18.379,29.5,17,29.5L17,29.5z" fill="#00C853"/></g><g><g opacity="0.3"><path d="M15,43h12V20H11v19C11,41.209,12.791,43,15,43z" fill="#37474F"/></g><path d="M59,19v24H18c-2.209,0-4-1.791-4-4V19H59z" fill="#69F0AE"/><g><path d="M50.527,39.5c0.231-2.083,1.89-3.741,3.973-3.973v-9.055c-2.083-0.231-3.741-1.89-3.973-3.973H15.5V37     c0,1.379,1.121,2.5,2.5,2.5H50.527z" fill="#B9F6CA"/><path d="M16,23h34.101c0.398,1.956,1.943,3.501,3.899,3.899v8.201c-1.956,0.398-3.501,1.943-3.899,3.899H18     c-1.103,0-2-0.897-2-2V23L16,23z M15,22c0,1.708,0,10.207,0,15c0,1.657,1.344,3,3,3h33c0-2.21,1.791-4,4-4V26     c-2.209,0-4-1.79-4-4H15L15,22z" fill="#00C853"/></g><path d="M31,37.5c-3.032,0-5.5-2.916-5.5-6.5s2.468-6.5,5.5-6.5s5.5,2.916,5.5,6.5S34.032,37.5,31,37.5z" fill="#00E676"/><path d="M30,33.105v-0.358c-0.883-0.464-1.5-1.518-1.5-2.747c0-1.657,1.119-3,2.5-3s2.5,1.343,2.5,3    c0,1.229-0.617,2.283-1.5,2.747v0.358c1.52,0.296,2.69,1.236,2.945,2.413c-1,1.22-2.398,1.981-3.945,1.981    s-2.945-0.762-3.945-1.981C27.31,34.342,28.48,33.401,30,33.105z" fill="#B9F6CA"/><path d="M25,31c0,3.865,2.687,7,6,7s6-3.135,6-7s-2.687-7-6-7S25,27.135,25,31z M36,31    c0,1.325-0.364,2.548-0.973,3.541c-0.541-0.744-1.488-1.111-2.527-1.342v-0.17C33.42,32.41,34,31.256,34,30    c0-1.93-1.346-3.5-3-3.5s-3,1.57-3,3.5c0,1.256,0.58,2.41,1.5,3.029v0.17c-1.038,0.231-1.99,0.592-2.531,1.336    C26.362,33.543,26,32.322,26,31c0-3.309,2.243-6,5-6S36,27.691,36,31z M27.701,35.498c0.004-0.002,0.007-0.005,0.01-0.007    c-0.03-0.032-0.064-0.055-0.095-0.087c-0.002-0.002-0.003-0.004-0.005-0.005c0.255-0.636,0.984-1.011,2.484-1.304    c0.234-0.045,0.404-0.251,0.404-0.49v-0.858c0-0.186-0.103-0.356-0.268-0.442C29.483,31.911,29,31.006,29,30    c0-1.379,0.897-2.5,2-2.5c1.104,0,2,1.121,2,2.5c0,1.006-0.484,1.911-1.232,2.305c-0.164,0.086-0.268,0.257-0.268,0.442v0.858    c0,0.239,0.17,0.445,0.404,0.49c1.5,0.293,2.229,0.668,2.484,1.304c-0.002,0.002-0.004,0.003-0.005,0.005    c-0.062,0.066-0.132,0.116-0.195,0.18c0.007,0.004,0.013,0.009,0.02,0.012C33.339,36.471,32.221,37,31,37    C29.735,37,28.583,36.43,27.701,35.498z" fill="#00C853"/><path d="M16,23h34.101c0.398,1.956,1.943,3.501,3.899,3.899v8.201c-1.956,0.398-3.501,1.943-3.899,3.899H18    c-1.103,0-2-0.897-2-2V23L16,23z M15,22v15c0,1.657,1.344,3,3,3h33c0-2.21,1.791-4,4-4V26c-2.209,0-4-1.79-4-4H15L15,22z" fill="#00C853"/><path d="M18,12h3v23h-3c-2.209,0-4,1.791-4,4V22v-6C14,13.791,15.791,12,18,12z" fill="#00C853"/><path d="M45,29.5c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5S44.172,29.5,45,29.5L45,29.5z     M45,28.5c-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5S46.379,28.5,45,28.5L45,28.5z" fill="#00C853"/></g><rect fill="#00C853" height="1" width="56" x="3" y="44"/></g></svg> \n        </ion-icon>\n      </button>\n    <ion-buttons *ngIf="select" end>\n      <button ion-button danger icon-only (tap)="update()">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      <button ion-button icon-only (tap)="delete()">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n    </ion-buttons>\n    <ion-title>Agenda Financeira</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <button ion-item [ngClass]="{\'selected\': id===idSelected}" *ngFor="let agenda of agendas; let id = index" (press)="buttons(agenda,id)"\n      (tap)="goPage(agenda)">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>{{agenda.descricao}}</ion-col>\n        </ion-row>\n        <ion-row style="font-size: 70%">\n          <ion-col col-6 style="text-align: left">Número de Parcelas: {{agenda.parcelas}}</ion-col>\n          <ion-col col-6 style="text-align: right">Valor: {{agenda.parcela[0].sinal ? "+" : "-"}} {{agenda.parcela[0].valor | currency:\'BRL\':true:\'1.2-2\'}}</ion-col>\n        </ion-row>\n        <ion-row style="font-size: 70%">\n          <ion-col col-12 style="text-align: right">Data de Vencimento: {{agenda.parcela[0].vencimento}}</ion-col>\n        </ion-row>\n      </ion-grid>\n   </button>\n  </ion-list>\n\n\n  <ion-fab top edge right *ngIf="!select">\n    <button color="primary-fab" ion-fab (click)="insert()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Cayres\projetosjs\CayresFinances\src\pages\agenda\agenda.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_finance_finance__["a" /* FinanceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], AgendaPage);

var AgendaPage_1;
//# sourceMappingURL=agenda.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Cayres\projetosjs\CayresFinances\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="">\n        <svg enable-background="new 0 0 70 100" height="55px" id="Layer_1" version="1.1" viewBox="0 0 70 100" width="40px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="replenishment"><g id="adaptive_coding"><g><g><path d="M61,55c0,2.75-2.25,5-5,5H38c-2.75,0-5-2.25-5-5V10c0-2.75,2.25-5,5-5h18c2.75,0,5,2.25,5,5V55z" fill="#37474F"/></g><g><path d="M38,5c-2.75,0-5,2.25-5,5v45c0,0.697,0.146,1.359,0.407,1.964L53.814,5H38z" fill="#455A64"/></g><g><circle cx="47" cy="56" fill="#607D8B" r="2"/></g><g><rect fill="#607D8B" height="1" width="1" x="40" y="8"/></g><g><path d="M50,8.5C50,8.775,49.775,9,49.5,9h-6C43.225,9,43,8.775,43,8.5l0,0C43,8.225,43.225,8,43.5,8h6      C49.775,8,50,8.225,50,8.5L50,8.5z" fill="#607D8B"/></g><g><rect fill="#607D8B" height="41" width="24" x="35" y="12"/></g></g></g><g><rect fill="#00E676" height="24" width="56" x="3" y="20"/><g><path d="M11.473,40.5c-0.231-2.083-1.891-3.741-3.973-3.973v-9.055c2.082-0.231,3.741-1.89,3.973-3.973h39.055     c0.231,2.083,1.891,3.741,3.973,3.973v9.055c-2.082,0.231-3.741,1.89-3.973,3.973H11.473z" fill="#B9F6CA"/><path d="M50.101,24c0.398,1.956,1.943,3.501,3.899,3.899v8.201c-1.956,0.398-3.501,1.943-3.899,3.899H11.899     C11.501,38.044,9.956,36.499,8,36.101v-8.201c1.956-0.398,3.501-1.943,3.899-3.899H50.101L50.101,24z M51,23H11     c0,2.21-1.791,4-4,4v10c2.209,0,4,1.79,4,4h40c0-2.21,1.791-4,4-4V27C52.791,27,51,25.21,51,23L51,23z" fill="#00C853"/></g><path d="M45,30.5c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5S44.172,30.5,45,30.5L45,30.5z     M45,29.5c-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5S46.379,29.5,45,29.5L45,29.5z" fill="#00C853"/><path d="M17,30.5c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5S16.172,30.5,17,30.5L17,30.5z     M17,29.5c-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5S18.379,29.5,17,29.5L17,29.5z" fill="#00C853"/></g><g><g opacity="0.3"><path d="M15,43h12V20H11v19C11,41.209,12.791,43,15,43z" fill="#37474F"/></g><path d="M59,19v24H18c-2.209,0-4-1.791-4-4V19H59z" fill="#69F0AE"/><g><path d="M50.527,39.5c0.231-2.083,1.89-3.741,3.973-3.973v-9.055c-2.083-0.231-3.741-1.89-3.973-3.973H15.5V37     c0,1.379,1.121,2.5,2.5,2.5H50.527z" fill="#B9F6CA"/><path d="M16,23h34.101c0.398,1.956,1.943,3.501,3.899,3.899v8.201c-1.956,0.398-3.501,1.943-3.899,3.899H18     c-1.103,0-2-0.897-2-2V23L16,23z M15,22c0,1.708,0,10.207,0,15c0,1.657,1.344,3,3,3h33c0-2.21,1.791-4,4-4V26     c-2.209,0-4-1.79-4-4H15L15,22z" fill="#00C853"/></g><path d="M31,37.5c-3.032,0-5.5-2.916-5.5-6.5s2.468-6.5,5.5-6.5s5.5,2.916,5.5,6.5S34.032,37.5,31,37.5z" fill="#00E676"/><path d="M30,33.105v-0.358c-0.883-0.464-1.5-1.518-1.5-2.747c0-1.657,1.119-3,2.5-3s2.5,1.343,2.5,3    c0,1.229-0.617,2.283-1.5,2.747v0.358c1.52,0.296,2.69,1.236,2.945,2.413c-1,1.22-2.398,1.981-3.945,1.981    s-2.945-0.762-3.945-1.981C27.31,34.342,28.48,33.401,30,33.105z" fill="#B9F6CA"/><path d="M25,31c0,3.865,2.687,7,6,7s6-3.135,6-7s-2.687-7-6-7S25,27.135,25,31z M36,31    c0,1.325-0.364,2.548-0.973,3.541c-0.541-0.744-1.488-1.111-2.527-1.342v-0.17C33.42,32.41,34,31.256,34,30    c0-1.93-1.346-3.5-3-3.5s-3,1.57-3,3.5c0,1.256,0.58,2.41,1.5,3.029v0.17c-1.038,0.231-1.99,0.592-2.531,1.336    C26.362,33.543,26,32.322,26,31c0-3.309,2.243-6,5-6S36,27.691,36,31z M27.701,35.498c0.004-0.002,0.007-0.005,0.01-0.007    c-0.03-0.032-0.064-0.055-0.095-0.087c-0.002-0.002-0.003-0.004-0.005-0.005c0.255-0.636,0.984-1.011,2.484-1.304    c0.234-0.045,0.404-0.251,0.404-0.49v-0.858c0-0.186-0.103-0.356-0.268-0.442C29.483,31.911,29,31.006,29,30    c0-1.379,0.897-2.5,2-2.5c1.104,0,2,1.121,2,2.5c0,1.006-0.484,1.911-1.232,2.305c-0.164,0.086-0.268,0.257-0.268,0.442v0.858    c0,0.239,0.17,0.445,0.404,0.49c1.5,0.293,2.229,0.668,2.484,1.304c-0.002,0.002-0.004,0.003-0.005,0.005    c-0.062,0.066-0.132,0.116-0.195,0.18c0.007,0.004,0.013,0.009,0.02,0.012C33.339,36.471,32.221,37,31,37    C29.735,37,28.583,36.43,27.701,35.498z" fill="#00C853"/><path d="M16,23h34.101c0.398,1.956,1.943,3.501,3.899,3.899v8.201c-1.956,0.398-3.501,1.943-3.899,3.899H18    c-1.103,0-2-0.897-2-2V23L16,23z M15,22v15c0,1.657,1.344,3,3,3h33c0-2.21,1.791-4,4-4V26c-2.209,0-4-1.79-4-4H15L15,22z" fill="#00C853"/><path d="M18,12h3v23h-3c-2.209,0-4,1.791-4,4V22v-6C14,13.791,15.791,12,18,12z" fill="#00C853"/><path d="M45,29.5c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5S44.172,29.5,45,29.5L45,29.5z     M45,28.5c-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5S46.379,28.5,45,28.5L45,28.5z" fill="#00C853"/></g><rect fill="#00C853" height="1" width="56" x="3" y="44"/></g></svg> \n      </ion-icon>\n    </button>\n    <ion-title>Cayres Finances</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Finanças Pessoais</h3>\n</ion-content>'/*ion-inline-end:"C:\Users\Cayres\projetosjs\CayresFinances\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\Cayres\projetosjs\CayresFinances\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="">\n        <svg enable-background="new 0 0 70 100" height="55px" id="Layer_1" version="1.1" viewBox="0 0 70 100" width="40px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="replenishment"><g id="adaptive_coding"><g><g><path d="M61,55c0,2.75-2.25,5-5,5H38c-2.75,0-5-2.25-5-5V10c0-2.75,2.25-5,5-5h18c2.75,0,5,2.25,5,5V55z" fill="#37474F"/></g><g><path d="M38,5c-2.75,0-5,2.25-5,5v45c0,0.697,0.146,1.359,0.407,1.964L53.814,5H38z" fill="#455A64"/></g><g><circle cx="47" cy="56" fill="#607D8B" r="2"/></g><g><rect fill="#607D8B" height="1" width="1" x="40" y="8"/></g><g><path d="M50,8.5C50,8.775,49.775,9,49.5,9h-6C43.225,9,43,8.775,43,8.5l0,0C43,8.225,43.225,8,43.5,8h6      C49.775,8,50,8.225,50,8.5L50,8.5z" fill="#607D8B"/></g><g><rect fill="#607D8B" height="41" width="24" x="35" y="12"/></g></g></g><g><rect fill="#00E676" height="24" width="56" x="3" y="20"/><g><path d="M11.473,40.5c-0.231-2.083-1.891-3.741-3.973-3.973v-9.055c2.082-0.231,3.741-1.89,3.973-3.973h39.055     c0.231,2.083,1.891,3.741,3.973,3.973v9.055c-2.082,0.231-3.741,1.89-3.973,3.973H11.473z" fill="#B9F6CA"/><path d="M50.101,24c0.398,1.956,1.943,3.501,3.899,3.899v8.201c-1.956,0.398-3.501,1.943-3.899,3.899H11.899     C11.501,38.044,9.956,36.499,8,36.101v-8.201c1.956-0.398,3.501-1.943,3.899-3.899H50.101L50.101,24z M51,23H11     c0,2.21-1.791,4-4,4v10c2.209,0,4,1.79,4,4h40c0-2.21,1.791-4,4-4V27C52.791,27,51,25.21,51,23L51,23z" fill="#00C853"/></g><path d="M45,30.5c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5S44.172,30.5,45,30.5L45,30.5z     M45,29.5c-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5S46.379,29.5,45,29.5L45,29.5z" fill="#00C853"/><path d="M17,30.5c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5S16.172,30.5,17,30.5L17,30.5z     M17,29.5c-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5S18.379,29.5,17,29.5L17,29.5z" fill="#00C853"/></g><g><g opacity="0.3"><path d="M15,43h12V20H11v19C11,41.209,12.791,43,15,43z" fill="#37474F"/></g><path d="M59,19v24H18c-2.209,0-4-1.791-4-4V19H59z" fill="#69F0AE"/><g><path d="M50.527,39.5c0.231-2.083,1.89-3.741,3.973-3.973v-9.055c-2.083-0.231-3.741-1.89-3.973-3.973H15.5V37     c0,1.379,1.121,2.5,2.5,2.5H50.527z" fill="#B9F6CA"/><path d="M16,23h34.101c0.398,1.956,1.943,3.501,3.899,3.899v8.201c-1.956,0.398-3.501,1.943-3.899,3.899H18     c-1.103,0-2-0.897-2-2V23L16,23z M15,22c0,1.708,0,10.207,0,15c0,1.657,1.344,3,3,3h33c0-2.21,1.791-4,4-4V26     c-2.209,0-4-1.79-4-4H15L15,22z" fill="#00C853"/></g><path d="M31,37.5c-3.032,0-5.5-2.916-5.5-6.5s2.468-6.5,5.5-6.5s5.5,2.916,5.5,6.5S34.032,37.5,31,37.5z" fill="#00E676"/><path d="M30,33.105v-0.358c-0.883-0.464-1.5-1.518-1.5-2.747c0-1.657,1.119-3,2.5-3s2.5,1.343,2.5,3    c0,1.229-0.617,2.283-1.5,2.747v0.358c1.52,0.296,2.69,1.236,2.945,2.413c-1,1.22-2.398,1.981-3.945,1.981    s-2.945-0.762-3.945-1.981C27.31,34.342,28.48,33.401,30,33.105z" fill="#B9F6CA"/><path d="M25,31c0,3.865,2.687,7,6,7s6-3.135,6-7s-2.687-7-6-7S25,27.135,25,31z M36,31    c0,1.325-0.364,2.548-0.973,3.541c-0.541-0.744-1.488-1.111-2.527-1.342v-0.17C33.42,32.41,34,31.256,34,30    c0-1.93-1.346-3.5-3-3.5s-3,1.57-3,3.5c0,1.256,0.58,2.41,1.5,3.029v0.17c-1.038,0.231-1.99,0.592-2.531,1.336    C26.362,33.543,26,32.322,26,31c0-3.309,2.243-6,5-6S36,27.691,36,31z M27.701,35.498c0.004-0.002,0.007-0.005,0.01-0.007    c-0.03-0.032-0.064-0.055-0.095-0.087c-0.002-0.002-0.003-0.004-0.005-0.005c0.255-0.636,0.984-1.011,2.484-1.304    c0.234-0.045,0.404-0.251,0.404-0.49v-0.858c0-0.186-0.103-0.356-0.268-0.442C29.483,31.911,29,31.006,29,30    c0-1.379,0.897-2.5,2-2.5c1.104,0,2,1.121,2,2.5c0,1.006-0.484,1.911-1.232,2.305c-0.164,0.086-0.268,0.257-0.268,0.442v0.858    c0,0.239,0.17,0.445,0.404,0.49c1.5,0.293,2.229,0.668,2.484,1.304c-0.002,0.002-0.004,0.003-0.005,0.005    c-0.062,0.066-0.132,0.116-0.195,0.18c0.007,0.004,0.013,0.009,0.02,0.012C33.339,36.471,32.221,37,31,37    C29.735,37,28.583,36.43,27.701,35.498z" fill="#00C853"/><path d="M16,23h34.101c0.398,1.956,1.943,3.501,3.899,3.899v8.201c-1.956,0.398-3.501,1.943-3.899,3.899H18    c-1.103,0-2-0.897-2-2V23L16,23z M15,22v15c0,1.657,1.344,3,3,3h33c0-2.21,1.791-4,4-4V26c-2.209,0-4-1.79-4-4H15L15,22z" fill="#00C853"/><path d="M18,12h3v23h-3c-2.209,0-4,1.791-4,4V22v-6C14,13.791,15.791,12,18,12z" fill="#00C853"/><path d="M45,29.5c0.828,0,1.5,0.672,1.5,1.5s-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5S44.172,29.5,45,29.5L45,29.5z     M45,28.5c-1.379,0-2.5,1.121-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.121,2.5-2.5S46.379,28.5,45,28.5L45,28.5z" fill="#00C853"/></g><rect fill="#00C853" height="1" width="56" x="3" y="44"/></g></svg> \n      </ion-icon>\n  </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content currency>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Cayres\projetosjs\CayresFinances\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(264);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_directives_module__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_agenda_agenda_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_finance_finance__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(574);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












__WEBPACK_IMPORTED_MODULE_7__pages_agenda_agenda_module__["AgendaPageModule"];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/agenda/agenda-modal/agenda-modal.module#AgendaModalPageModule', name: 'AgendaModalPage', segment: 'agenda-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/agenda/agenda-detalhe/agenda-detalhe.module#AgendaDetalhePageModule', name: 'AgendaDetalhePage', segment: 'agenda-detalhe', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/agenda/agenda.module#AgendaPageModule', name: 'AgendaPage', segment: 'agenda', priority: 'low', defaultHistory: [] }
                ]
            }), __WEBPACK_IMPORTED_MODULE_7__pages_agenda_agenda_module__["AgendaPageModule"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__directives_directives_module__["a" /* DirectivesModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_finance_finance__["a" /* FinanceProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* LOCALE_ID */], useValue: 'pt-BR' },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CurrencyDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var CurrencyDirective = (function () {
    function CurrencyDirective(cur) {
        this.cur = cur;
        this.i = false;
    }
    CurrencyDirective.prototype.onkeyup = function (event) {
        this.key = event.key;
        this.keyCode = event.keyCode;
        this.which = event.which;
        alert(this.key.charCodeAt(0));
        alert(this.keyCode);
        alert(this.which);
        if (isNaN(Number(this.unformat(this.ion_input.value.toString())))) {
            this.ion_input.setValue('0.00');
            // console.log('Deu NaN');
        }
        if (!this.i) {
            this.orig = this.ion_input.value.toString();
            // console.log('Capturou Primeiro Orig: ' + this.orig);
            this.i = true;
        }
        else if (this.key >= '0' && this.key <= '9') {
            this.orig = this.ion_input.value.toString();
            // console.log('Capturou Novo Orig: ' + this.orig);
        }
        else if (this.keyCode == 8 || this.keyCode == 46) {
            this.orig = this.ion_input.value.toString() || '0';
            // console.log('Capturou Novo Orig Delete: ' + this.orig);
        }
        this.orig = this.unformat(this.orig);
        this.orig = this.unformat(this.orig);
        this.orig = this.orig.substring(0, 11);
        this.valor = this.orig.substring(0, this.orig.length - 2) + '.' +
            this.orig.substring(this.orig.length - 2, this.orig.length);
        // console.log('Iseriu decimal Valor: ' + this.valor);
        this.valor = this.cur.transform(this.valor, 'BRL', true, '1.2-2');
        // console.log('Aplicou Pipe Valor: ' + this.valor);
        this.ion_input.setValue(this.valor);
    };
    CurrencyDirective.prototype.unformat = function (valor) {
        valor = valor.replace('.', '');
        valor = valor.replace(',', '');
        valor = valor.replace('R$', '');
        return valor;
    };
    return CurrencyDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* TextInput */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* TextInput */])
], CurrencyDirective.prototype, "ion_input", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* HostListener */])('keyUp', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], CurrencyDirective.prototype, "onkeyup", null);
CurrencyDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */])({
        selector: '[pcc-currency]',
        providers: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["c" /* CurrencyPipe */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common__["c" /* CurrencyPipe */]])
], CurrencyDirective);

//# sourceMappingURL=currency.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_agenda_agenda__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Agenda Financeira', component: __WEBPACK_IMPORTED_MODULE_6__pages_agenda_agenda__["a" /* AgendaPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Cayres\projetosjs\CayresFinances\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button class="menu" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Cayres\projetosjs\CayresFinances\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__currency_currency__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__currency_currency__["a" /* CurrencyDirective */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__currency_currency__["a" /* CurrencyDirective */]]
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ })

},[259]);
//# sourceMappingURL=main.js.map