import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleServiceService } from '../service/article-service.service';
import { Article } from '../model/Article';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['./ajouter-article.component.css']
})
export class AjouterArticleComponent implements OnInit {
  article : Article;

  constructor(private router: Router, private articleService: ArticleServiceService) { }

  ngOnInit() {
  }

  onSubmit(user: Article) {

    this.articleService.addArticle(user).subscribe(
      data => {
        this.article = data;
        console.log(this.article.id);
      },
      err => console.log("Erreur lors de la creation de l'article"));

    let link = ['/exempleService01'];
    this.router.navigate(link);
  }



}
