import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Recette } from './recette';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
    private recetteUrl = 'api/recette';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,) { }

  /** GET recettes du serveur */
  getRecettes(): Observable<Recette[]> {
    return this.http.get<Recette[]>(this.recetteUrl)
      .pipe(
        tap(_ => console.log('recette trouvées')),
        catchError(this.handleError<Recette[]>('getRecette', []))
      );
  }
  /** GET recette par id. Retourne `undefined` si l'id n'est pas trouvé */
  getRecetteNo404<Data>(id: number): Observable<Recette> {
    const url = `${this.recetteUrl}/?id=${id}`;
    return this.http.get<Recette[]>(url)
      .pipe(
        map(recette => recette[0]), // retourne un {0|1} élément du tableau
        tap(h => {
          const outcome = h ? `trouvé` : `pas trouvé`;
          console.log(`${outcome} recette id=${id}`);
        }),
        catchError(this.handleError<Recette>(`getRecette id=${id}`))
      );
  }
  /** GET recette par l'id. Retourne erreur 404 si l'id n'est pas trouvé */
  getRecette(id: number): Observable<Recette> {
    const url = `${this.recetteUrl}/${id}`;
    return this.http.get<Recette>(url).pipe(
      tap(_ => console.log(`recette trouvée avec cet id=${id}`)),
      catchError(this.handleError<Recette>(`getRecette id=${id}`))
    );
  }
  /* GET les recettes dés que il y'a un caractère en commun */
  searchRecette(term: string): Observable<Recette[]> {
    if (!term.trim()) {
      // si non, retourne le tableau vide.
      return of([]);
    }
    return this.http.get<Recette[]>(`${this.recetteUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        console.log(`rectte trouvé qui correspond à ce terme "${term}"`) :
        console.log(`aucune recette trouvée "${term}"`)),
      catchError(this.handleError<Recette[]>('searchRecette', []))
    );
  }

  //////// Méthodes Valider //////////
  /** POST: on ajoute une nouvelle recette au serveur */
  addHero(recette: Recette): Observable<Recette> {
    return this.http.post<Recette>(this.recetteUrl, recette, this.httpOptions).pipe(
      tap((newRecette: Recette) => console.log(`recette ajoutée w/ id=${newRecette.id}`)),
      catchError(this.handleError<Recette>('addRecette'))
    );
  }
  /** DELETE: on efface la recette du serveur */
  deleteHero(recette: Recette | number): Observable<Recette> {
    const id = typeof recette === 'number' ? recette : recette.id;
    const url = `${this.recetteUrl}/${id}`;

    return this.http.delete<Recette>(url, this.httpOptions).pipe(
      tap(_ => console.log(`recette supprimé id=${id}`)),
      catchError(this.handleError<Recette>('deleteRecette'))
    );
  }
  /** PUT: on met à jour la recette sur le serveur */
  updateRecette(recette: Recette): Observable<any> {
    return this.http.put(this.recetteUrl, recette, this.httpOptions).pipe(
      tap(_ => console.log(`recette modifié id=${recette.id}`)),
      catchError(this.handleError<any>('updateRecette'))
    );
  }
  /**
   * On gère les opérations Http qui ont échouées.
   * L'app continue de fonctionner.
   * @param operation - nom de l'opération qui a échouée
   * @param result - valeur optionnel à retourner en tant que rédultat de l'observable 
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // on log sur la console

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // L'app continue de fonctionner en renvoyant un rédultat vide.
      return of(result as T);
    };
  }
}
