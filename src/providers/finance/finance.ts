import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';



/*
  Generated class for the FinanceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FinanceProvider {
  public agendas: Array<string>;
  private url: string = 'http://192.168.0.11:3000/agendas/';

  errorHandler: any;

  constructor(private http: Http) {}

  getAgendas() {
    return this.http.get(this.url).map(res => res.json());
  }



  insert(agenda) {
    let body = JSON.stringify(agenda);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({method:'POST',headers:headers});
    

    //console.log("Entrou financesService: Update")
    //console.log('URL:' + urlPut);
    //console.log('Body: ' + body);
    //console.log('Headers:' + JSON.stringify(headers));
    //console.log('Options:' + JSON.stringify(options));
    


    return this.http.post(this.url , body, options)
    .map(res => res.json())
    .catch(this.errorHandler);
  }

  update(agenda) {

    let body = JSON.stringify(agenda);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let urlPut = this.url + agenda._id;
    let options = new RequestOptions({method:'PUT',headers:headers});
    

    //console.log("Entrou financesService: Update")
    //console.log('URL:' + urlPut);
    //console.log('Body: ' + body);
    //console.log('Headers:' + JSON.stringify(headers));
    //console.log('Options:' + JSON.stringify(options));
    


    return this.http.put(urlPut , body, options)
    .map(res => res.json())
    .catch(this.errorHandler);
  }

  excluir(agenda) {
    // this.links.splice(index, 1);
  }
}
