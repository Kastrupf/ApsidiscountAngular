import { Component, OnInit } from '@angular/core';
import { Article } from '../model/Article';
import { ArticleServiceService } from '../service/article-service.service';


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  
  arti: Article[];
  message2: string;
  stock: number;
  art: Article;
  typeListe: number;

  constructor(private listArt: ArticleServiceService) { }

  ngOnInit() {
    this.arti = [];
    this.message2 = ' Pas d\'articles dans la liste';
    // this.listArt.getArticleByIdJson(3).subscribe(article=>{
    //   this.arti=article
    // });
    this.listArt.getAllArticlesJson().subscribe(article => {
      this.arti=article;
     // this.arti.push(article));
  });
  }
  /**
   * ajouterPanier
   */
  ajouterPanier() { }


  avecStock() {
    this.arti = [];
    this.listArt.getAllArticlesJson().subscribe(article => this.arti=article);
    this.typeListe=1;
  }
  sansStock() {
    this.arti = [];
    this.listArt.getArtPositifJson().subscribe (article => this.arti=article );
    this.typeListe=2;
  }


  rechercherId(id:number){
    
    this.listArt.getArticleById(3).subscribe (article => this.art=article );
      
   
  }
  deleteArticle(id: number){
    this.listArt.deleteArticle(id).subscribe(
      
      value =>{
        switch (this.typeListe) {
          case  1: this.sansStock();
          case 2 : this.avecStock();
          default: this.arti=null;
        }},
    );
    err => this.message2='erreur lors de la suppression de  article'
  }

  // selectArticle(art: Article){
  //   console.log('selectArticle :id = ' +art)
  // }
}
