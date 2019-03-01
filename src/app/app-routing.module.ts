import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChefinfoComponent } from './components/chefinfo/chefinfo.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const routes: Routes = [
{ path: '',  component: HomeComponent },
{ path: 'info', component: ChefinfoComponent},
{ path: 'receta/:id', component: DetallesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
