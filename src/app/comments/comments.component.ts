import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [ArticleService]
})
export class CommentsComponent implements OnInit {
  @Output() submitClick = new EventEmitter();
  articleId: number = null;
  articleToDisplay: Article;
  comments: string;

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private articleService: ArticleService
    ) {  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.articleId = parseInt(urlParameters['id']);
    });
    this.articleToDisplay = this.articleService.getArticleById(this.articleId);
  }
  
  addComment(){
    console.log(this.articleToDisplay);
    this.submitClick.emit();
  }

}
