import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { InicioComponent } from './inicio/inicio.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    InicioComponent,
    MantenimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
