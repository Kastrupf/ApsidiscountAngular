import { Component, OnInit } from '@angular/core';
import { Article } from '../model/Article';
import { ArticleServiceService } from '../service/article-service.service';
import { Router, ActivatedRoute } from '@angular/router';


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

  constructor(private router: Router, private listArt: ArticleServiceService) { }

  ngOnInit() {
    this.arti = [];
    this.message2 = ' Pas d\'articles dans la liste';

    this.listArt.getAllArticlesJson().subscribe(article => {
      this.arti=article;
  
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
    
    this.listArt.getArticleById(id).subscribe (article => this.art=article );
      
   
  }

  //  ***************************tentative de faire une methode pour clic et recherche par id  pour projet **********************
  //                              ************ recherche reussi manque l'affichage (routing)**********************
  selectArticle(id:number){
    console.log('selectArticle : id =' + id);
   
    let link=['/gestionArticle', {outlets: {'detail': [id]}}];
    this.router.navigate(link);
 
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
}
