import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
    inscriForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
