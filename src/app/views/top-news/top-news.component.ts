import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Constants
import { CATEGORIES, COUNTRIES } from './../../shared/data-types/constants';

// Data types
import { Article } from './../../shared/data-types/article';
import { KeyValue } from './../../shared/data-types/key-value';
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
  category: string;
  country = 'gb';
  selectedCategory: KeyValue;
  selectedCountry: KeyValue;
  showContent = false;
  title: string;

  constructor(
    private route: ActivatedRoute,
    private tns: TopNewsService
  ) { }

  ngOnInit(): void {
    // show the spinner before articles are loaded
    setTimeout(() => {
      this.getParams();
    }, 750);
  }

  getParams(): void {
    this.category = this.route.snapshot.params.category;
    // this.country = this.route.snapshot.params.country;
    this.setCategoryValue(this.category);
    this.setCountryValue(this.country);

    this.category ? this.getArticlesByCategory(this.category) : this.getArticles();
  }

  getArticles(): void {
    this.title = `Top news from ${this.selectedCountry.value}`;

    this.tns.getNewsByCountry(this.selectedCountry.key)
      .subscribe((response: Response) => {
        this.articles = response.status === 'ok' ? response.articles : [];
        this.showContent = true;
      }, (error) => {
        throw error;
      });
  }

  getArticlesByCategory(category: string): void {
    this.title = `Top ${this.selectedCategory.value} news from ${this.selectedCountry.value}`;

    this.tns.getNewsByCategory(this.selectedCountry.key, category)
      .subscribe((response: Response) => {
        this.articles = response.status === 'ok' ? response.articles : [];
        this.showContent = true;
      }, (error) => {
        throw error;
      });
  }

  setCategoryValue(category: string): void {
    this.selectedCategory = CATEGORIES.find(el => el.key === category);
  }

  setCountryValue(country: string): void {
    this.selectedCountry = COUNTRIES.find(el => el.key === country);
  }
}
