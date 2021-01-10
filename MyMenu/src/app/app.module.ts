import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavorisComponent } from './favoris/favoris.component';
import { CreerRecetteComponent } from './creer-recette/creer-recette.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ModifierRecetteComponent } from './modifier-recette/modifier-recette.component';
import { SupprimerRecetteComponent } from './supprimer-recette/supprimer-recette.component';
import { ChoixCompteComponent } from './choix-compte/choix-compte.component';
import { ConfirmMessageComponent } from './confirm-message/confirm-message.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { AccueilComponent } from './accueil/accueil.component';
import { RecetteDetailComponent } from './recette-detail/recette-detail.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    FavorisComponent,
    CreerRecetteComponent,
    ConnexionComponent,
    InscriptionComponent,
    ModifierRecetteComponent,
    SupprimerRecetteComponent,
    ChoixCompteComponent,
    RecetteDetailComponent,
    ConfirmMessageComponent,
    SearchbarComponent,
    AccueilComponent,
    RecetteDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatRadioModule,
    MatMenuModule,
    MatChipsModule,
    MatIconModule,
    LayoutModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false}
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
