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
  public votes: number;
  public title: string;
  public link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  ngOnInit() {
  }

  public voteUp(): void {
    this.votes += 1;
  }

  public voteDown(): void {
    this.votes -= 1;
  }
}
