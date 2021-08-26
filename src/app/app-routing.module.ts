import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { InicioComponent } from './inicio/inicio.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';

const routes: Routes = [
  { path: 'vehiculo', component: VehiculoComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'mantenimiento', component: MantenimientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
