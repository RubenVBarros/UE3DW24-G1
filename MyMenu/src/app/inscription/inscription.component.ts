import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Comptes } from '../comptes';
import { ComptesService } from '../comptes.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
    comptes: Comptes[];
    showAlert = false;
    inscriForm: FormGroup;

    //Fonction pour afficher la notification
    toogleAlert(){
        this.showAlert = !this.showAlert;
    }
    //Quand  clique sur ok de la notification la fait disparaitre
    closeAlert(){
        this.showAlert = !this.showAlert;
    }

  constructor(private fb: FormBuilder, private compteService: ComptesService) { }

  ngOnInit(): void {
      this.getComptes();
      this.inscriForm = this.fb.group({
          email:['', [
              Validators.required,
              Validators.email
          ]],
          mdp:['',[
            Validators.required,
            Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
        ]],
      }),
      this.inscriForm.valueChanges.subscribe(console.log);
  }
  getComptes(): void {
    this.compteService.getComptes()
    .subscribe(comptes => this.comptes = comptes);
  }
  add(email: string,mdp: string): void {
    email = email.trim();
    mdp = mdp.trim();
    if (!email) { return; }
    if (!mdp) { return; }
    this.compteService.addCompte({ email,mdp } as Comptes)
      .subscribe(compte => {
        this.comptes.push(compte);
      });
  }
  get email(){
    return this.inscriForm.get('email');
  }
  get mdp(){
    return this.inscriForm.get('mdp');
  }
}
