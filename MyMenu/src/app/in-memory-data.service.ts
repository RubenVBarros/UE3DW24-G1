import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recette } from './recette';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        const recette = [
          { id: 1, titre: 'Brownie'},
          { id: 2, name: 'Boeuf Bourguignon' },
          { id: 3, name: 'Guacamole' }
        ];
        return {recette};
      }
    // Overrides the genId method to ensure that a hero always has an id.
    // Si le tableau des recettes est vide,
    // La méthode retourne le nombre initial (1).
    // Si le tableau n'est pas vide, la méthode retourne le nombre le plus grand
    // recette id + 1.
  genId(recette: Recette[]): number {
    return recette.length > 0 ? Math.max(...recette.map(recette => recette.id)) + 1 : 1;
  }
}
