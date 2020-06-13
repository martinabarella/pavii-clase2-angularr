import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { ArticulosListaComponent } from './articulos-lista/articulos-lista.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MenuComponent, PrincipalComponent, ArticulosListaComponent ],
  bootstrap:    [ PrincipalComponent ] //este levanta la app
})
export class AppModule { }
