import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule } from 
'@angular/forms';
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
      IdArticuloFamilia : ['',[Validators.required,Validators.maxLength(5),
      Validators.pattern('^[0-9]*$')]],
      Nombre: ['',[Validators.required]]
    })
  }

  grabar(){
  ArticulosFamilias.push({ 
    IdArticuloFamilia: Number(this.fg.value.IdArticuloFamilia),
    Nombre: this.fg.value.Nombre});
  window.alert('Articulo cargado.')
  }

}