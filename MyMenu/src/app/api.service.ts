import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recette } from './recette';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private url: string = 'http://mymenu-api-public.matthieugiraud.fr';

  constructor(private http:HttpClient) { }

  getRecetteApi(){
      return this.http.get<Recette[]>(`${this.url}/recipes`, {responseType: 'json', observe: 'body'});
  }
  getRecetteApiId(recetteId: string) {
    return this.http.get<Recette>(`${this.url}/recipes/${recetteId}`, {responseType: 'json', observe: 'body'});
}
}
