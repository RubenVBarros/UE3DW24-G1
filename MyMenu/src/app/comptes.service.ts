import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Comptes } from './comptes';


@Injectable({
  providedIn: 'root'
})
export class ComptesService {
    private comptesUrl = 'api/comptes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,) { }

  /** GET comptes du serveur */
  getComptes(): Observable<Comptes[]> {
    return this.http.get<Comptes[]>(this.comptesUrl)
      .pipe(
        tap(_ => console.log('compte trouvées')),
        catchError(this.handleError<Comptes[]>('getCompte', []))
      );
  }
  /** GET compte par id. Retourne `undefined` si l'id n'est pas trouvé */
  getCompteNo404<Data>(id: number): Observable<Comptes> {
    const url = `${this.comptesUrl}/?id=${id}`;
    return this.http.get<Comptes[]>(url)
      .pipe(
        map(compte => compte[0]), // retourne un {0|1} élément du tableau
        tap(h => {
          const outcome = h ? `trouvé` : `pas trouvé`;
          console.log(`${outcome} compte id=${id}`);
        }),
        catchError(this.handleError<Comptes>(`getCompte id=${id}`))
      );
  }
  /** GET compte par l'id. Retourne erreur 404 si l'id n'est pas trouvé */
  getCompte(id: number): Observable<Comptes> {
    const url = `${this.comptesUrl}/${id}`;
    return this.http.get<Comptes>(url).pipe(
      tap(_ => console.log(`compte trouvé avec cet id=${id}`)),
      catchError(this.handleError<Comptes>(`getCompte id=${id}`))
    );
  }
  /* GET les comptes dés que il y'a un caractère en commun */
  searchCompte(term: string): Observable<Comptes[]> {
    if (!term.trim()) {
      // si non, retourne le tableau vide.
      return of([]);
    }
    return this.http.get<Comptes[]>(`${this.comptesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        console.log(`compte trouvé qui correspond à ce terme "${term}"`) :
        console.log(`aucun compte trouvée "${term}"`)),
      catchError(this.handleError<Comptes[]>('searchCompte', []))
    );
  }

  //////// Méthodes Valider //////////
  /** POST: on ajoute un nouveau compte au serveur */
  addCompte(compte: Comptes): Observable<Comptes> {
    return this.http.post<Comptes>(this.comptesUrl, compte, this.httpOptions).pipe(
      tap((newcompte: Comptes) => console.log(`compte ajoutée w/ id=${newcompte.id}`)),
      catchError(this.handleError<Comptes>('addCompte'))
    );
  }
  /** DELETE: on efface le compte du serveur */
  deleteCompte(compte: Comptes | number): Observable<Comptes> {
    const id = typeof compte === 'number' ? compte : compte.id;
    const url = `${this.comptesUrl}/${id}`;

    return this.http.delete<Comptes>(url, this.httpOptions).pipe(
      tap(_ => console.log(`compte supprimé id=${id}`)),
      catchError(this.handleError<Comptes>('deleteCompte'))
    );
  }
  /** PUT: on met à jour le compte sur le serveur */
  updateCompte(compte: Comptes): Observable<any> {
    return this.http.put(this.comptesUrl, compte, this.httpOptions).pipe(
      tap(_ => console.log(`compte modifié id=${compte.id}`)),
      catchError(this.handleError<any>('updateCompte'))
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
