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
          { id: 1, titre: 'Brownie',temps_prep: "25 minute",portions: 6,url: "",ingrédients: ["250g de chocolat","1 sachet de sucre vanillé","3 oeufs","150g de sucre","60g de farine","sel"],instrucitons: ["1 - Faites fondre le chocolat cassé en morceaux avec le beurre.","2 - Pendant ce temps, battez les oeufs avec le sucre jusqu'à ce que le mélange blanchisse.","3 - Ajoutez la farine, le sucre vanillé, et ajoutez le chocolat.","4 - Versez le tout dans un moule, et enfournez à 180°C (thermostat 6)pendant 15 min.. Et voilà."]},
          { id: 2, name: 'Boeuf Bourguignon',temps_prep:"6 heures",portions:4,url:"",ingredients:["600g de bourguignon","4 oignons","4 carottes","1 bouquet géant","1 bouteille de vin rouge assez bon","100g de beurre","sel","poivre"],instructions:["1 - Détailler la viande en cubes de 3 cm de côté, enlever les gros morceaux de gras.","2 - Couper l'oignon en morceaux. Le faire revenir dans une poêle au beurre. Une fois transparent, le verser dans une cocotte en fonte de préférence.","3 - Procéder de même avec la viande mais en plusieurs fois, jusqu'à ce que tous les morceaux soient cuits. Les ajouter au fur et à mesure dans la cocotte. Ne pas avoir peur d'ajouter du beurre entre chaque fournée.","4 - Quand toute la viande est dans la cocotte, déglacer la poêle avec de l'eau ou du vin et faire bouillir en raclant pour récupérer le suc. Saler, poivrer, ajouter au reste.","5 - Recouvrir le tout avec une partie du vin et faire mijoter quelques heures avec le bouquet garni et les carottes en rondelles.","6 - Le lendemain, faire mijoter au moins 2 heures en plusieurs fois, ajouter du vin ou de l'eau si nécessaire."]},
          { id: 3, name: 'Guacamole',temps_prep:"10 minute",portions:"6",url:"",ingredients: ["2 avocats","branche de coriandre vert","1 citron vert","1 oignon frais","sel"], instrucitons:["1 - Emincer l'oignon frais et les feuilles de coriandre.","2 - Ecraser l'avocat, ajouter l'oignon, la coriandre, le jus d'un (ou 2 selon les goûts) citron et salez votre goût.","3 - Idéal avec des nachos (chips de maïs) ou encore en accompagnement de viandes grillées. C'est fini."]}
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
