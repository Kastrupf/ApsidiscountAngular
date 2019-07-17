import { Component, OnInit, Input} from '@angular/core';
import { Article } from '../model/Article';
import { ARTICLES } from '../model/articles-mock';
import { ArticleServiceService } from '../service/article-service.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  @Input() article: Article;
  aligne: string;
  disabledSuivant: boolean;
  disabledPrecedent: boolean;
  compteurNav: number;
  idArticle = 0;
  art: Article;

  constructor(private listArt: ArticleServiceService) { }

  ngOnInit() {
    //this.idArticle = 0;
    this.listArt.getArticleByIdJson(3).subscribe(article=>{
      this.article=article;
      console.log("lo "+ this.article.id);
    });
    // this.listArt.getAllArticlesJson().subscribe(article => {
    //   this.tabArticle=article;
     // this.arti.push(article));
  // });

    
    //this.article = ARTICLES[this.idArticle];
    this.disabledPrecedent=true;
    this.disabledSuivant=true;
    this.aligne="center";
    this.compteurNav=1;
    this.changerAligne();
    //this.tabArticle=ARTICLES;
   
    if (ARTICLES.length>1){
      this.disabledSuivant=false;
    }

  }

  public changerAligne() {
    // if (this.article.prix < 15) {
    //   this.aligne = 'left';
    // } else {
    //   this.aligne = 'center';
    // }

  }
  public augmenterPrix(){
    // this.article.prix =this.article.prix +5;
    // this.changerAligne();
  }
  public baisserPrix(){
    // this.article.prix =this.article.prix -5;
    // this.changerAligne();
  }
    
  public suivant(){
    // this.compteurNav++;
    // this.gererBoutonNav();
    // this.article=ARTICLES[this.compteurNav -1];

  }
  public precedent(){
    // this.compteurNav--;
    // this.gererBoutonNav();
    // this.article=ARTICLES[this.compteurNav -1];
    
  }
  private gererBoutonNav(){
    // if(this.compteurNav===ARTICLES.length){
    //   this.disabledSuivant=true;

    // }else{
    //   this.disabledSuivant=false;
    // }
    // if(this.compteurNav===1){
    //   this.disabledPrecedent=true;
    // }else{
    //   this.disabledPrecedent=false;
    // }
  }

  

}
