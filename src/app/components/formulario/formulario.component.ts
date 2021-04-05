import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametrosSeleccionados= new EventEmitter()

  categoriaSeleccionada:string="general"
  paisSeleccionado:string="br"
categorias:any[]=[
  {value:'general', nombre:'General'},
  {value:'business',nombre:'Negocios'},
  {value:'sports', nombre:'Deportes'},
  {value:'technology', nombre:'Tecnologia'}
]
paises:any[]=[
  {value:'ar', nombre:'Argentina'},
  {value:'br', nombre: 'Brasil'},
  {value:'fr', nombre: 'francia'},
  {value:'mx', nombre: 'Mexico'},
  {value:'gb', nombre: 'Reino Unido'},
  {value:'ch', nombre: 'Suiza'},
  {value:'ge',nombre:'Alemania'}

  
]
  constructor() { }

  ngOnInit(): void {
  }
buscarNoticia(){

  const PARAMETROS={
    categoria:this.categoriaSeleccionada,
    pais:this.paisSeleccionado
  }
  this.parametrosSeleccionados.emit(PARAMETROS)
}
}
