import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../article/article';
import { ArticleService } from '../article.service';
import { first } from 'rxjs/operators';
 

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  imgURL: any;
  selectedFile : File = null;
 
constructor(private http : HttpClient, private articleService : ArticleService){

}

onSelectFile(event) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url
    this.selectedFile = event.target.files[0];
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.imgURL = reader.result;
    }

  }
}

  onUpload() {
    const fd = new FormData();
    console.log(this.selectedFile.name);
    fd.append('image',this.selectedFile,this.selectedFile.name);
    this.http.post(URL,fd)
      .subscribe( res => {
        console.log(res);
      });

    let article = new Article(1,'test','/assets/images/materiel/'+this.selectedFile.name,50,'contenu','1','1', null,5)
    console.log("ajout de l'article "+ article.image)
    this.articleService.createArticle(article);
      // .pipe(first())
      // .subscribe(
      //   data => {
      //    console.log("article ajouté avec success")
      //   },
      //   error => {
      //     console.log(error);
      //   });  


  }
}
