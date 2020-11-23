import { Component, OnInit } from '@angular/core';

// Constants
import { CATEGORIES, COUNTRIES } from './../../shared/data-types/constants';

// Data types
import { Article } from './../../shared/data-types/article';
import { KeyValue } from './../../shared/data-types/key-value';
import { Response } from './../../shared/data-types/response';

// Services
import { TopNewsService } from './../../shared/services/top-news.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  // List of categories and related articles
  categories: KeyValue[] = CATEGORIES;
  selectedCategoryArticles: Article[] = [];

  country = 'gb';
  pageSize = 5;
  panelOpenState = false;
  selectedCountry: KeyValue;
  title: string;

  constructor(
    private tns: TopNewsService
  ) { }

  ngOnInit(): void {
    this.setCountryValue();
  }

  getArticles(category: string): any {
    this.panelOpenState = true;
    this.selectedCategoryArticles = [];
    this.title = `Top ${this.pageSize} news by category from ${this.selectedCountry.value}`;

    this.tns.getNewsByCategory(this.country, category, this.pageSize)
      .subscribe((response: Response) => {
        this.selectedCategoryArticles = response.status === 'ok' ? response.articles : [];
      }, (error) => {
        throw error;
      });
  }

  setCountryValue(): void {
    const country = this.country;
    this.selectedCountry = COUNTRIES.find(el => el.key === country);
  }
}
