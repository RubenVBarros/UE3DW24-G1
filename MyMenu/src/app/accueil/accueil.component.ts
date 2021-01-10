import { Component, OnInit } from '@angular/core';
import { Recette } from '../recette';
import { RecetteService } from '../recette.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
    showSuppr:boolean = false;
    recettes:Recette[];
    recette:Recette;
    private location: Location

  constructor(private recetteService:RecetteService) { }

  ngOnInit(): void {
    this.getRecettes();
  }
  //permet de voir les recettes présentes dans la bdd interne
  getRecettes(): void {
    this.recetteService.getRecettes()
    .subscribe(recettes => this.recettes = recettes);
  }
  delete(recette: Recette): void {
    this.recettes = this.recettes.filter(r => r !== recette);
    this.recetteService.deleteRecette(recette).subscribe();
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.recetteService.updateRecette(this.recette)
      .subscribe(() => this.goBack());
  }
  toogleSuppr(){
      this.showSuppr = !this.showSuppr;
  }
  //update les recettes

  //supprimer les recettes


}
