import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProduitsComponent } from './gestion-articles/liste-articles/liste-produits.component';
import { DetailArticleComponent } from './gestion-articles/detail-article/detail-article.component';
import { AjouterArticleComponent } from './gestion-articles/ajouter-article/ajouter-article.component';
import { AjouterArticleBuilderComponent } from './gestion-articles/ajouter-article-builder/ajouter-article-builder.component';
import { GestionArticlesComponent } from './gestion-articles/gestion-articles.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './gestion-clients/login/login.component';
import { GestionClientsComponent } from './gestion-clients/gestion-clients.component';
import { GestionPanierComponent } from './gestion-panier/gestion-panier.component';

const appRoutes: Routes = [

  {path: 'gestionArticle', component: GestionArticlesComponent,
       children: [
           { path: '', component: ListeProduitsComponent, outlet: 'list' },
           { path: ':id', component: DetailArticleComponent, outlet: 'detail' }
          
          ]
   },
  {
    path: 'gestionClients', component: GestionClientsComponent,
    children: [
      { path: ':id', component: LoginComponent, outlet: 'detail' },
    ]
  },
  {
    path: 'gestionPanier', component: GestionPanierComponent,
    children: [
      { path: 'panier', component: GestionPanierComponent, outlet: 'panier' },
      { path: 'ajouter-article', component: AjouterArticleComponent },
      { path: 'ajouter-article-builder', component: AjouterArticleBuilderComponent }
    ]
  },

  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/liste-produits', pathMatch: 'full' },
  { path: '**', component: ListeProduitsComponent } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
