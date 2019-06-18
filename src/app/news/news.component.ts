import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [ArticleService]
})
export class NewsComponent implements OnInit {
  articles: Article[];

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit(){
    this.articles = this.articleService.getArticles();
  }

  goToArticlePage(clickedArticle: Article) {

    this.router.navigate(['article', clickedArticle.id]);
    
  };

}
