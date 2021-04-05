import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }


getNews(parametros:any):Observable<any>{
  console.log(parametros)
  let miUrl=`https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=a218bb3ebc6c411da9c8d4aead14537d`


return this.http.get(miUrl)
}
}