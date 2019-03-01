import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  recipes:any;

  constructor(private service: ServiceService) {
    this.recipes= this.service.obtenerReceta();
    
   }

  ngOnInit() {
  }

}
