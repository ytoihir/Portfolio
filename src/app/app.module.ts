import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuteursComponent } from './auteurs/auteurs.component';
import { AuteurDetailComponent } from './auteur-detail/auteur-detail.component';
import { PersonnagesComponent } from './personnages/personnages.component';
import { PersonnageDetailComponent } from './personnage-detail/personnage-detail.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { JeuxComponent } from './jeux/jeux.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AuteursComponent,
    AuteurDetailComponent,
    PersonnagesComponent,
    PersonnageDetailComponent,
    PortfolioComponent,
    JeuxComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
