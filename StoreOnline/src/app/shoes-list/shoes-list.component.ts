import {Component, OnInit} from '@angular/core';
import {products} from '../ListTemp';
import { ApiRest } from '../API-REST/API.service';
import {ActivatedRoute} from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.css']
})
export class ShoesListComponent implements OnInit{
  categoria;
  changeText: boolean;
  products = products;
  shoes;
  constructor(
    private apiRest: ApiRest,
    private route: ActivatedRoute,
  ) {
  }
  ngOnInit(): void {
    this.apiRest.listar_archivos().subscribe((res: any) => {
      this.shoes = res;
    });
    //Button Whatts
    $(document).ready(function(){
      let boton =  $('.ngx-whatsapp-button-float');
      boton.css('bottom', '90px')
        .css('right', '30px');
    });
  }
}
