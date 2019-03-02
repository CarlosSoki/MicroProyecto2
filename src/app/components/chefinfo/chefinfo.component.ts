import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-chefinfo',
  templateUrl: './chefinfo.component.html',
  styleUrls: ['./chefinfo.component.css']
})
export class ChefinfoComponent implements OnInit {

  recipes:any;

  constructor(private service: ServiceService) {
    this.recipes= this.service.obtenerReceta();
  }
  

  ngOnInit() {
  }

}
