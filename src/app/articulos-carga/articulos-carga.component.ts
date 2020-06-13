import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-articulos-carga',
  templateUrl: './articulos-carga.component.html',
  styleUrls: ['./articulos-carga.component.css']
})
export class ArticulosCargaComponent implements OnInit {
  fg: FormGroup;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}