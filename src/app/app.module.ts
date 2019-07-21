import { ArticleServiceService } from './service/article-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { DetailArticleComponent } from './gestion-articles/detail-article/detail-article.component';
import { ListeProduitsComponent } from './gestion-articles/liste-articles/liste-produits.component';
import { StockCouleurDirective } from './directive/stock-couleur.directive';
import { AjouterArticleComponent } from './gestion-articles/ajouter-article/ajouter-article.component';
import { AjouterArticleBuilderComponent } from './gestion-articles/ajouter-article-builder/ajouter-article-builder.component';
import { GestionArticlesComponent } from './gestion-articles/gestion-articles.component';
import { LoginComponent } from './gestion-clients/login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthService } from './service/auth.service';
import { GestionClientsComponent } from './gestion-clients/gestion-clients.component';
import { GestionPanierComponent } from './gestion-panier/gestion-panier.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailArticleComponent,
    ListeProduitsComponent,
    StockCouleurDirective,
    AjouterArticleComponent,
    AjouterArticleBuilderComponent,
    GestionArticlesComponent,
    LoginComponent,
    AccueilComponent,
    GestionClientsComponent,
    GestionPanierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, ArticleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
