import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { StockCouleurDirective } from './directive/stock-couleur.directive';
import { AjouterArticleComponent } from './ajouter-article/ajouter-article.component';
import { AjouterArticleBuilderComponent } from './ajouter-article-builder/ajouter-article-builder.component';
import { GestionArticlesComponent } from './gestion-articles/gestion-articles.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailArticleComponent,
    ListeProduitsComponent,
    StockCouleurDirective,
    AjouterArticleComponent,
    AjouterArticleBuilderComponent,
    GestionArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
