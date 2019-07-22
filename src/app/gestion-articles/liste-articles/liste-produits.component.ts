import { Categorie } from '../../model/Categorie';
import { Component, OnInit } from '@angular/core';
// <<<<<<< HEAD:src/app/liste-produits/liste-produits.component.ts
// import { Article } from '../model/Article';
// import { ArticleServiceService } from '../service/article-service.service';
// import { Router } from '@angular/router';
// import { CategorieServiceService } from '../service/categorie-service.service';
// =======
import { Article } from '../../model/Article';
import { ArticleServiceService } from '../../service/article-service.service';
import { Router } from '@angular/router';
import { CategorieServiceService } from '../../service/categorie-service.service';
// >>>>>>> b44efdfa8775004ead4c2d3840f0dd66fae990c3:src/app/gestion-articles/liste-articles/liste-produits.component.ts


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  cate: Categorie[];
  arti: Article[];
  message2: string;
  stock: number;
  art: Article;
  cat: Categorie;
  categorieSelected: number;
  typeListe: number;
 
 

  constructor(private router: Router, private listArt: ArticleServiceService, private listCat: CategorieServiceService) { }

  ngOnInit() {
    this.arti = [];
    this.cate = [];
    this.message2 = ' Pas d\'articles dans la liste';
    this.typeListe = 1;
    this.listArt.getAllArticlesJson().subscribe(article => {
    this.arti = article;
    //this.categorieSelected = 0;

    });
    this.listCat.getAllCategorieJson().subscribe(categorie => {
      this.cate = categorie;
    });
  }
  /**
   * ajouterPanier
   */
  ajouterPanier() { }

  avecStock() {
    this.arti = [];
    this.listArt.getAllArticlesJson().subscribe(article => this.arti = article);
    this.typeListe = 1;
  }
  sansStock() {
    this.arti = [];
    this.listArt.getArtPositifJson().subscribe(article => this.arti = article);
    this.typeListe = 2;
  }



  // rechercherId(id: number) {

  //   this.listArt.getArticleById(id).subscribe(article => this.art = article);



  selectArticleByCategorie(id: number) {
    console.log('selectArticleByCategorie : id =' + id);
    this.listArt.getArticleByIdcategorie(id).subscribe(article => this.arti = article);
     let link = ['/gestionArticle', { outlets: { 'list': [id] } }];
     this.router.navigate(link);
  
  }

  selectArticle(id: number) {
    console.log('selectArticle : id =' + id);
    let link = ['/gestionArticle', { outlets: { 'detail': [id] } }];
    this.router.navigate(link);

  }

  deleteArticle(id: number) {
    this.listArt.deleteArticle(id).subscribe(

      value => {
        switch (this.typeListe) {
          case 1: this.sansStock();
          case 2: this.avecStock();
          default: this.arti = null;
        }
      },
    );
    err => this.message2 = 'erreur lors de la suppression de  article'
  }
}
