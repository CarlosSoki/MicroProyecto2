import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ChefinfoComponent } from './components/chefinfo/chefinfo.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServiceService } from 'src/app/services/service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetallesComponent,
    ChefinfoComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
