import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Location } from '@angular/common'
import { Article } from '../article.model'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  articleId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.articleId = parseInt(urlParameters['id']);
    });
  }

}
