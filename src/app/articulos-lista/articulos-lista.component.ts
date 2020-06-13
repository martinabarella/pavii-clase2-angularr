import { Component, OnInit } from '@angular/core';
import { ArticulosFamilias } from '../models/articulosfamiliacoleccion'
import { ArticuloFamilia } from '../models/articulofamilia';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})
export class ArticulosListaComponent implements OnInit {
  id: string;
  listaArticulos: ArticuloFamilia[];
  verGrilla = false;
  mensajeBoton = 'Mostrar Grilla'

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listaArticulos = ArticulosFamilias;
    this.id = this.route.snapshot.paramMap.get("id");
   

  }
  mostrarOcultarGrilla(){
    
    this.mensajeBoton = this.verGrilla?'Mostrar Grilla':'Ocultar Grilla'
    this.verGrilla = !this.verGrilla;
    
    //el de arriba t lo niega, abajo entonces si es true oculta, si es false lomuestra
    //this.mensajeBoton = this.verGrilla?'Ocultar Grilla':'Mostrar Grilla'

  }

}