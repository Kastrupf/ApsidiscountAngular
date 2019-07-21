import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from '../../model/Article';
import { Router } from '@angular/router';
import { ArticleServiceService } from '../../service/article-service.service';
import { ArticlesValidators } from './ArticlesValidators';

@Component({
  selector: 'app-ajouter-article-builder',
  templateUrl: './ajouter-article-builder.component.html',
  styleUrls: ['./ajouter-article-builder.component.css']
})
export class AjouterArticleBuilderComponent implements OnInit {

  article: Article;
  createForm: FormGroup;

  image: FormControl;
  designation: FormControl;
  constructeurId: FormControl;
  categorieId: FormControl;
  content: FormControl;
  dateMiseEnLigne: FormControl;
  stock: FormControl;
  prix: FormControl;


  constructor(private builder: FormBuilder, private router: Router, private articleService: ArticleServiceService) {
    this.image = new FormControl('', Validators.required);
    this.designation = new FormControl('', [Validators.required,Validators.maxLength(20)]);
    this.constructeurId = new FormControl('', Validators.required);
    this.categorieId = new FormControl('', Validators.required);
    this.content = new FormControl('', Validators.required);
    this.dateMiseEnLigne = new FormControl('', Validators.required);
    this.stock = new FormControl('',[Validators.required , ArticlesValidators.etrePositif]);
    this.prix = new FormControl('', [Validators.required , ArticlesValidators.etrePositif]);

    this.createForm = builder.group({
      image: this.image,
      designation: this.designation,
      constructeurId: this.constructeurId,
      categorieId: this.categorieId,
      content: this.content,
      dateMiseEnLigne: this.dateMiseEnLigne,
      stock: this.stock,
      prix: this.prix
    });

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

  ngOnInit() {
  }

}
