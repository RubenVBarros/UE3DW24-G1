import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-supprimer-recette',
  templateUrl: './supprimer-recette.component.html',
  styleUrls: ['./supprimer-recette.component.scss']
})
export class SupprimerRecetteComponent implements OnInit {
    @Input() showMe:boolean;

    constructor() { }

    ngOnInit(): void {
    }
    closeAlert(){
        this.showMe = false;
    }

}
