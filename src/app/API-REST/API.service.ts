import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


const endpoint = 'https://storeonline-eg-mysql.herokuapp.com/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': 'https://storeonlineeg-e1c21.web.app/'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiRest{
  constructor(private httpClient: HttpClient) { }

  public getOneShoe(id): Observable<any>{
    console.log(id);
    return this.httpClient.put<any>(endpoint + 'getShoe/' + id, '{ "id": "' + id + '" }' , httpOptions);
  }
  public returnIndex(){
    return 0;
  }
  public addShoe(shoe): Observable<any> {
    return this.httpClient.post<any>(endpoint + 'addShoe', JSON.stringify(shoe), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( shoe ) => console.log(`added product w/ id=${shoe.id}`)),
    );
  }
  public addVenta(venta): Observable<any> {
    return this.httpClient.post<any>(endpoint + 'addVenta', JSON.stringify(venta), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( venta ) => console.log(`added product w/ id=${venta.estilo}`)),
    );
  }
  public  getShoes(): Observable<any>{
    return this.httpClient.get(endpoint + 'shoes');
  }
  public  getCarga1(): Observable<any>{
    return this.httpClient.get(endpoint + 'carga1');
  }
  public getShoesBoy(): Observable<any>{
    return this.httpClient.get(endpoint + 'shoes/Nino');
  }
  public getShoesGirl(): Observable<any>{
    return this.httpClient.get(endpoint + 'shoes/Nina');
  }
  public getShoesDama(): Observable<any>{
    return this.httpClient.get(endpoint + 'shoes/Dama');
  }
  public getShoesCaballero(): Observable<any>{
    return this.httpClient.get(endpoint + 'shoes/Caballero');
  }
}
