import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  selectedCategory = '';
  selectedCountry = 'Great Britain';
  mainTitle: string;

  constructor(
    private route: ActivatedRoute,
    private tns: TopNewsService
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams(): void {
    console.log('route: ', this.route);
    const categoryParam = this.route.snapshot.params.category;

    categoryParam ? this.getArticlesByCategory(categoryParam) : this.getArticles();
  }

  getArticles(): void {
    this.mainTitle = `Top news from`;

    this.tns.getNewsByCountry(this.country)
      .subscribe((response: Response) => {
        this.articles = response.status === 'ok' ? response.articles : [];
      }, (error) => {
        throw error;
      });
  }

  getArticlesByCategory(category: string): void {
    this.mainTitle = `Top ${category} news from`;

    this.tns.getNewsByCategory(this.country, category)
      .subscribe((response: Response) => {
        this.articles = response.status === 'ok' ? response.articles : [];
      }, (error) => {
        throw error;
      });
  }
}
