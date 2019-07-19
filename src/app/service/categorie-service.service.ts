import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../model/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  baseURL ='http://localhost:8081/apsidiscountweb/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  getAllCategorieJson(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.baseURL}/categorie`, this.httpOptions);
  }

  // getCategorieByIdJson(id: number): Observable<Categorie> {
  //   return this.http.get<Categorie>(`${this.baseURL}/categorie/${id}`, this.httpOptions);
  // }
}