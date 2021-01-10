import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, FormArray } from '@angular/forms';

import { Recette } from '../recette';
import { RecetteService } from '../recette.service';

@Component({
  selector: 'app-creer-recette',
  templateUrl: './creer-recette.component.html',
  styleUrls: ['./creer-recette.component.scss']
})

export class CreerRecetteComponent implements OnInit {
    recettes: Recette[];
    showAlert = false;
    creerRecetteForm:FormGroup;

    //fonction pour l'affichage des nombres sur le slider
    formatLabel(value: number) {
        if (value >= 5) {
          return value + ' m';
        }
        return value;
      }
      formatLabelPortions(value: number) {
        if (value >= 1) {
          return value;
        }
        return value;
      }

      //Fonction pour l'affichage si on choisit recette via url ou via instructions
      //Si recette via url est choisie alors la partie des instructions est cachée et vice-versa
      displayUrl = false;
      displayInstru = false;
      toogleUrl(){
          this.displayUrl = true;
          this.displayInstru = false;
          this.rlien.setValue(true);
          this.rinstructions.setValue(false);
      }
      toogleInstru(){
          this.displayInstru = true;
          this.displayUrl = false;
          this.rlien.setValue(false);
          this.rinstructions.setValue(true);
          this.url.setValue("exemple.com");
      }

      //Fonction pour afficher la notification
      toogleAlert(){
          this.showAlert = !this.showAlert;
      }
      //Quand  clique sur ok de la notification la fait disparaitre
      closeAlert(){
          this.showAlert = !this.showAlert;
      }

  constructor(private fb:FormBuilder,private recetteService: RecetteService) {}

  ngOnInit(): void {
      this.getRecettes();
      this.creerRecetteForm = this.fb.group({
        titre:['', [Validators.required,Validators.minLength(3)]],
        temps_prep:[null, [Validators.required]],
        portions:[null, [Validators.required]],
        rlien:[false, [Validators.required]],
        rinstructions:[false, [Validators.required]],

        //pattern pour voir si l'input donné est une adresse url.
        url:['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
        listeIngredients:this.fb.array([this.fb.control('',Validators.required)]),
        listeInstructions:this.fb.array([this.fb.control('',Validators.required)]),
      }),
      this.creerRecetteForm.valueChanges.subscribe(console.log);
  }

  //permet de voir les recettes présentes dans la bdd interne
  getRecettes(): void {
    this.recetteService.getRecettes()
    .subscribe(recettes => this.recettes = recettes);
  }

  //ajout ds la bdd interne
  add(titre: string,temps_prep: number,portions: number,url: string,ingredients: string[],instructions: string[]): void {
    titre = titre.trim();
    url = url.trim();
    if (!titre) { return; }
    if (!temps_prep) { return; }
    if (!portions) { return; }
    if (!url) { return; }
    if (!ingredients) { return; }
    if (!instructions) { return; }
    this.recetteService.addRecette({ titre, temps_prep, portions, url, ingredients, instructions } as Recette)
      .subscribe(recette => {
        this.recettes.push(recette);
      });
  }

  //Méthode d'ajout et suppression des ingrédients et instructions
  addIngredients(){
      this.listeIngredients.push(this.fb.control(''));
  }
  deleteIngredients(i){
      this.listeIngredients.removeAt(i);
  }
  addInstructions(){
    this.listeInstructions.push(this.fb.control(''));
  }
  deleteInstructions(i){
    this.listeInstructions.removeAt(i);
  }

  //Méthode Get pour obtenir les donnees et pour obtenir les donnees pour les tableaux Instructions et Ingrédients
  get titre(){
    return this.creerRecetteForm.get('titre');
  }
  get tempsPreparation(){
    return this.creerRecetteForm.get('temps_prep');
  }
  get Portions(){
    return this.creerRecetteForm.get('portions');
  }
  get url(){
    return this.creerRecetteForm.get('url');
  }
  get listeInstructions(){
    return this.creerRecetteForm.get('listeInstructions') as FormArray;
  }
  get listeIngredients(){
    return this.creerRecetteForm.get('listeIngredients') as FormArray;
  }
  get rlien(){
    return this.creerRecetteForm.get('rlien');
  }
  get rinstructions(){
    return this.creerRecetteForm.get('rinstructions');
  }

}
