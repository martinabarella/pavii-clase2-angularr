import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MenuComponent, PrincipalComponent ],
  bootstrap:    [ PrincipalComponent ] //este levanta la app
})
export class AppModule { }
