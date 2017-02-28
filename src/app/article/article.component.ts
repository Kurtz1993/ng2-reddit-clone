import { Article } from './article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: "row"
  }
})
export class ArticleComponent implements OnInit {
  public article: Article;

  constructor() {
    this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10
    );
  }

  ngOnInit() {
  }

  public voteUp(): boolean {
    this.article.votes += 1;
    return false;
  }

  public voteDown(): boolean {
    this.article.votes -= 1;
    return false;
  }
}
