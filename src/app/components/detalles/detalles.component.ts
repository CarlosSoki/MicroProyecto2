import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  recipe:any;
  constructor(
    private ruta: ActivatedRoute,
    private service : ServiceService 
  ) { 
    this.ruta.params.subscribe(params=>{
     this.recipe=this.service.obtenerUna(params['id'])
    })
  }
  

  ngOnInit() {

    
  }
  

}
