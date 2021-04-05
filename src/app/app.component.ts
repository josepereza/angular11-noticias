import { Component, OnInit } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
misnoticias:any[]=[]
spinner:boolean=false;
  constructor(public ns:NoticiaService){

  }

  ngOnInit() {
   
  }

  title = 'noticias';
  miFormulario(parametros:any){
    this.spinner=true;
    this.ns.getNews(parametros).subscribe((datos:any)=>{ 
      if (datos){this.spinner=false}
      console.log(datos)
      this.misnoticias=datos.articles;
    },error=>{
      console.log(error);
    })
  }
}
