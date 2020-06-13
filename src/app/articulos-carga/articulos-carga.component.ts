import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { ArticulosFamilias } from '../models/articulosfamiliacoleccion';
@Component({
  selector: 'app-articulos-carga',
  templateUrl: './articulos-carga.component.html',
  styleUrls: ['./articulos-carga.component.css']
})
export class ArticulosCargaComponent implements OnInit {
  fg: FormGroup;
  //lo privado en el constructor

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fg = this.fb.group({
      IdArticuloFamilia: [''],
      Nombre: ['']
    })
  }

  grabar(){
  ArticulosFamilias.push({ 
    IdArticuloFamilia: Number(this.fg.value.IdArticuloFamilia),
    Nombre: (this.fg.value.Nombre)});
  }

}