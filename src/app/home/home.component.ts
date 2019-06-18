import { Component } from '@angular/core';
import { Article } from '../article.model';
import { Router } from '@angular/router';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(private router: Router) { }


}
