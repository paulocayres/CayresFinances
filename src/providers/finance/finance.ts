import 'rxjs/add/operator/map';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

/*
  Generated class for the FinanceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FinanceProvider {
  public agendas: Array<string>;
  private url: string = 'http://192.168.0.11:3000/agendas';


  constructor(private http: Http) {}

  getAgendas() {
    return this.http.get(this.url).map(res => res.json());
  }



  insert(agenda) {
    // this.links.push(agenda);
  }

  update(agenda) {
    // this.links[index] = agenda;
  }

  excluir(agenda) {
    // this.links.splice(index, 1);
  }
}
