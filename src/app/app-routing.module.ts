import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuteurDetailComponent } from './auteur-detail/auteur-detail.component';
import { AuteursComponent } from './auteurs/auteurs.component';
import { HomeComponent } from './home/home.component';
import { JeuxComponent } from './jeux/jeux.component';
import { PersonnageDetailComponent } from './personnage-detail/personnage-detail.component';
import { PersonnagesComponent } from './personnages/personnages.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auteurs', component: AuteursComponent },
  { path: 'auteur/:id', component: AuteurDetailComponent },
  { path: 'personnages', component: PersonnagesComponent },
  { path: 'personnage/:id', component: PersonnageDetailComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'jeux', component: JeuxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
