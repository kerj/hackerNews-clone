import { Component } from '@angular/core';
import { Article } from '../article.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(private router: Router) { }

  articles: Article[] = [
    new Article('https://www.reuters.tv/v/PQob/2019/06/18/how-human-excrement-is-helping-kenyan-farmers', 'Human excrement makes chicken eggs better', 1),
    new Article('https://techcrunch.com/2019/06/18/amazon-expands-air-cargo-fleet-with-15-more-planes-will-have-70-planes-by-2021/', 'Amazon expands air cargo fleet with 15 more planes, will have 70 planes by 2021', 2),
    new Article('https://stackorphans.tsak.net/', 'Answer long forgotten Stack Overflow questions', 3)
  ];

  gotToArticlePage(clickedArticle: Article) {
    this.router.navigate(['article', clickedArticle.id]);
  }


}
