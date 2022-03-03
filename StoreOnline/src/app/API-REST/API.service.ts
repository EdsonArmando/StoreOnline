import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiRest{
  headers:HttpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });
  constructor(private httpClient: HttpClient) { }

  
  public listar_archivos(){
    const url = environment.API_MIDDLE + 'shoes&id=listado';

    return this.httpClient.post(url, {
      'ruta': environment.API_SERVICIO + '/shoes'
    }, {headers: this.headers}
    ).pipe(map( data => data ));
  }
  public CrearShoe(data){
    const url = environment.API_MIDDLE + 'shoes&id=createShoe';

    return this.httpClient.post(url, {
      'ruta': environment.API_SERVICIO + '/createShoe',
      'name': data.name,
      'price': data.price,
      'urlImage': data.urlImage,
      'categoria': data.categoria,
      'numeracion': data.numeracion,
      'disponibilidad': data.disponibilidad,
      'descripcion': data.descripcion,
      'cantidad': data.cantidad
    }, {headers: this.headers}
    ).pipe(map( data => data ));
  }
  public UploadFile(data){
    const url = environment.API_MIDDLE + 'File&id=subirArchivo';

    return this.httpClient.post<any>(url, {
      'ruta': environment.API_MICRO_SERVICIO + '/subirArchivo',
      'BASE64': data.BASE64,
      'CONTENIDO': data.CONTENIDO,
      'NOMBRE': data.NOMBRE
    }, {headers: this.headers}
    ).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(( image ) => console.log(`added image w/ id=${image}`)),
    );
  }
}
