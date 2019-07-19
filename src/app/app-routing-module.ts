import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { AjouterArticleBuilderComponent } from './ajouter-article-builder/ajouter-article-builder.component';
import { GestionArticlesComponent } from './gestion-articles/gestion-articles.component';


const appRoutes: Routes = [
  { path: 'liste-produits', component: ListeProduitsComponent },
  {path: 'gestionArticle', component: GestionArticlesComponent,
       children: [
           { path: '', component: DetailArticleComponent, outlet: 'detail' },
           { path: ':id', component: DetailArticleComponent, outlet: 'detail' }]
   },
  { path: 'articles/:id', component: DetailArticleComponent },
  { path: 'detail-article', component: DetailArticleComponent },
  { path: 'ajouter-article', component: AjouterArticleComponent },
  { path: 'ajouter-article-builder', component: AjouterArticleBuilderComponent },
  { path: '',   redirectTo: '/liste-produits', pathMatch: 'full' },
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
