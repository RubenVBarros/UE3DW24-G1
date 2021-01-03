import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
    inscriForm:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
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
  get email(){
    return this.inscriForm.get('email');
  }
  get mdp(){
    return this.inscriForm.get('mdp');
  }

}
