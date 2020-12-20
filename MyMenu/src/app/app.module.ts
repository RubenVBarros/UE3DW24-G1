import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { ModifierRecetteConfirmComponent } from './modifier-recette-confirm/modifier-recette-confirm.component';
import { SupprimerRecetteConfirmComponent } from './supprimer-recette-confirm/supprimer-recette-confirm.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';




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
    ModifierRecetteConfirmComponent,
    SupprimerRecetteConfirmComponent,
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
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
