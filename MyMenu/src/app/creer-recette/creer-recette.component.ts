import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creer-recette',
  templateUrl: './creer-recette.component.html',
  styleUrls: ['./creer-recette.component.scss']
})
export class CreerRecetteComponent implements OnInit {
    formatLabel(value: number) {
        if (value >= 5) {
          return value + ' m';
        }
        return value;
      }
      displayUrl = false;
      displayInstru = false;
      toogleUrl(){
          this.displayUrl = true;
          this.displayInstru = false;
      }
      toogleInstru(){
          this.displayInstru = true;
          this.displayUrl = false;
      }

  constructor() {}

  ngOnInit(): void {
  }

}
