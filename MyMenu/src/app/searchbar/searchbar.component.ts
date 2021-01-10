import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Recette } from '../recette';
import { RecetteService } from '../recette.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  recette$:Observable<Recette[]>;
  private searchTerms = new Subject<string>();

  constructor(private recetteService: RecetteService) { }

  search(term:string):void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
      this.recette$ = this.searchTerms.pipe(
          debounceTime(250),
          distinctUntilChanged(),
          switchMap((term:string) => this.recetteService.searchRecette(term)),
      );
  }
}
