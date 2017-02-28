import { Article } from './article.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: "row"
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  ngOnInit() {
  }

  public voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  public voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
