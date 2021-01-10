import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../recette.service';
import { Recette } from '../recette';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.scss']
})
export class RecetteDetailComponent implements OnInit {
    recette:Recette;
    panelOpenState = false;

  constructor(
      private recetteService:RecetteService,
      private route: ActivatedRoute,
      ) {}

  ngOnInit(): void {
    this.getRecette();
  }

  getRecette(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recetteService.getRecette(id)
      .subscribe(recette => this.recette = recette);
  }

}
