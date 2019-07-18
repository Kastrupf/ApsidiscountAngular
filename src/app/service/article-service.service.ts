import { Injectable } from '@angular/core';
import { Article } from '../model/Article';
import { ARTICLES } from '../model/articles-mock';
import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  baseURL ='http://localhost:8081/apsidiscountweb/api';

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  constructor(private http:HttpClient) { }
 
// ********    sans Json *******
  getAllArticles() : Observable<Article>{
    return from(ARTICLES);
  }

  getAllArticlesJson() : Observable<Article[]>{
    return this.http.get<Article[]>(`${this.baseURL}/article`,this.httpOptions);
  }

  // // ********    sans Json *******
  // getArtPositif() : Observable<Article>{
  //  let $monObservable=this.getAllArticles().pipe(
  //   filter(art => art.stock > 0 )
  //  );
  //  return $monObservable;
  // }

  getArtPositifJson() : Observable<Article[]>{
    let $monObservable=this.getAllArticlesJson().pipe(
    map(tabArticles=> tabArticles.filter(art=>art.stock>0))
    );
    return $monObservable;
   }


   getArticleByIdJson(id: number): Observable<Article> {
    return this.http.get<Article> (`${this.baseURL}/articles/${id}`,this.httpOptions);
  }

  getArticleById(id:number) : Observable<Article>{
    let $monObservable = this.getAllArticles().pipe(
      filter(art =>art.id===id)
    );
    return $monObservable;
   }

   /// ******* Creer un article   *****
   addArticle(article:Article): Observable<Article>{
    return this.http.post<Article>(`${this.baseURL}/articles`,article,this.httpOptions);

  }
    

 public deleteArticle(id:number) : Observable<Article>{
   return this.http.delete<Article>(`${this.baseURL}/articles/${id}`,this.httpOptions);
 }
  

}
