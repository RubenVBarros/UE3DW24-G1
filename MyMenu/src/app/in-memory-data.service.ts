import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recette } from './recette';
import { Comptes } from './comptes';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
    createDb() {
        const recette = [
          { id: 1, titre: 'Brownie',temps_prep: "25",portions: 6,url: "https://www.marmiton.org/recettes/recette_brownies_16951.aspx",ingredients: ["250g de chocolat"," 1 sachet de sucre vanillé"," 3 oeufs"," 150g de sucre", " 60g de farine"," sel"],instructions: ["1 - Faites fondre le chocolat cassé en morceaux avec le beurre.","2 - Pendant ce temps, battez les oeufs avec le sucre jusqu'à ce que le mélange blanchisse.","3 - Ajoutez la farine, le sucre vanillé, et ajoutez le chocolat.","4 - Versez le tout dans un moule, et enfournez à 180°C (thermostat 6)pendant 15 min.. Et voilà."]},
          { id: 2, titre: 'Tacos Mexicains',temps_prep:"55",portions:4,url:"https://www.marmiton.org/recettes/recette_tacos-mexicains_34389.aspx",ingredients:["8 tortillas pour tacos"," 1 oignon"," 2 tomates"," 1 verre de coulis de tomate"," 250g de boeuf haché"," 1 petite boîte de haricots rouges"," 1/2 poivron vert"," 8 feuilles de laitue", " Cumin en poudre"," Poivre"," Sel", " Tabasco"],instructions:["1 - A la poêle, faire dorer l'oignon émincé dans un peu d'huile d'olive.","2 - Rajouter la viande, assaisonner et laisser cuire 5 min.","3 - Laver les feuilles de laitue.","4 - Couper les tomates et le poivron en petits dés.","5 - Incorporer le tout à la poêlée avec le coulis de tomate, et poursuivre la cuisson pendant 5 min.","6 - Egoutter les haricots rouges et les ajouter 2 min avant la fin de cuisson.","7 - Hors du feu, ajuster l'assaisonnement et saupoudrer généreusement de cumin; on peut aussi rajouter quelques gouttes de Tabasco.", "8 - Garnir les tortillas de préparation et les refermer en les roulant comme des crêpes. Disposer 1 feuille de laitue sur chaque tacos avant de servir."]},
          { id: 3, titre: 'Guacamole',temps_prep:"10",portions:"6",url:"https://www.marmiton.org/recettes/recette_guacamole_18571.aspx",ingredients: ["2 avocats"," branche de coriandre verte"," 1 citron vert"," 1 oignon frais"," sel"], instructions:["1 - Emincer l'oignon frais et les feuilles de coriandre.","2 - Ecraser l'avocat, ajouter l'oignon, la coriandre, le jus d'un (ou 2 selon les goûts) citron et salez votre goût.","3 - Idéal avec des nachos (chips de maïs) ou encore en accompagnement de viandes grillées. C'est fini."]}
        ];
        const compte = [
            {id:1,email:"williamregal@gmail.com",mdp:"admin"}
        ];
        return {recette,compte};
      }
    // Overrides the genId method to ensure that a hero always has an id.
    // Si le tableau des recettes est vide,
    // La méthode retourne le nombre initial (1).
    // Si le tableau n'est pas vide, la méthode retourne le nombre le plus grand
    // recette id + 1.
  genId(recette: Recette[]): number {
    return recette.length > 0 ? Math.max(...recette.map(recette => recette.id)) + 1 : 1;
  }
  genIdCompte(comptes: Comptes[]): number{
    return comptes.length > 0 ? Math.max(...comptes.map(comptes => comptes.id)) + 1 : 1;
  }
}
