import { Component, OnInit } from '@angular/core';

// Data types
import { Article } from './../../shared/data-types/article';
import { Response } from './../../shared/data-types/response';

// Services
import { TopNewsService } from './../../shared/services/top-news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit {
  articles: Article[] = [];
  country = 'gb';

  topNewsTitle = 'Top news from Great Britain';

  constructor(
    private tns: TopNewsService
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): any {
    return this.tns.getAllNews(this.country)
      .subscribe((response: Response) => {
        this.articles = response.status === 'ok' ? response.articles : [];
      }, (error) => {
        throw error;
      });
  }
}
