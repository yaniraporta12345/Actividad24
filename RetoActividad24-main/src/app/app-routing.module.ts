import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { Panel01Component } from './panel01/panel01.component';
import { Panel02Component } from './panel02/panel02.component';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { LoginComponent } from './principal/login/login.component';
import { VistaComponent } from './principal/vista/vista.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  {path: 'vista', component: VistaComponent},
  {path: 'formulario', component: FormularioComponent, canActivate: [CanactivateGuard]},
  {path: 'busqueda', component: BusquedaComponent, canActivate: [CanactivateGuard]},
  {path: 'panel01', component: Panel01Component, canActivate: [CanactivateGuard]},
  {path: 'panel02', component: Panel02Component, canActivate: [CanactivateGuard]},
  {path: 'tabla', component: TablaComponent, canActivate: [CanactivateGuard]},
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
