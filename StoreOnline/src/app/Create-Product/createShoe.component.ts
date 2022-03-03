import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {ApiRest} from '../API-REST/API.service';
import {ActivatedRoute} from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-create-shoe',
  templateUrl: './createShoe.component.html',
  styleUrls: ['./createShoe.component.css']
})
export class CreateShoeComponent implements OnInit{
  insertShoe;
  selectedfile : File;
  archivocargado:File | undefined;
  downloadURL: Observable<string>;
  url2;
  id_toInsert;
  imgURL = null;
  constructor(private formBuilder: FormBuilder,
              private storage: AngularFireStorage,
              private apiRest: ApiRest,
              private route: ActivatedRoute) {
    this.insertShoe = this.formBuilder.group({
      name: '',
      urlImage: '',
      price: '',
      disponibilidad: '',
      cantidad: '',
      descripcion: '',
      categoria: '',
      numeracion: ''
    });
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id_toInsert = params.get('idCreate');
    });
  }
  InsertShoe(dataShoe){
      dataShoe.urlImage = this.imgURL;
      console.log(dataShoe);
      this.apiRest.CrearShoe(dataShoe).subscribe((result) => {
        console.log('Succes');
        alert('Producto Agregado Exitosamente');
      }, (err) => {
        console.log(err);
      });
  }
  onFileSelected(event){
    this.archivocargado = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(this.archivocargado);
    let nameImage = this.archivocargado.name.toString();
    let filetype = this.archivocargado?.type.toString();
    let filebase64:any = "";
    
    reader.onload = ( event2:any ) => {
      filebase64 = reader.result?.toString();
      filebase64 = filebase64.replace(/data:.+?,/,"");       
      let dataImage = {
        NOMBRE : nameImage,
        CONTENIDO : filetype,
        BASE64 : filebase64
      };
      this.apiRest.UploadFile(dataImage).subscribe((result) => {
        this.imgURL = result.downloadURL;       
      }, (err) => {
        console.log(err);
      });
    }        
  }  
}
