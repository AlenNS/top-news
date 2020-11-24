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
  categories: any;
  selectedCategoryArticles: Article[] = [];

  country = 'gb';
  isExpanded = true;
  pageSize = 5;
  panelOpenState = false;
  selectedCountry: KeyValue;
  title: string;

  constructor(
    private tns: TopNewsService
  ) { }

  ngOnInit(): void {
    this.setCategories();
    this.setCountryValue(this.country);
  }

  changeCountry(country: string): void {
    this.setCategories();
    this.setCountryValue(country);
  }

  getArticles(category: string): any {
    this.selectedCategoryArticles = [];

    this.tns.getNewsByCategory(this.selectedCountry.key, category, this.pageSize)
      .subscribe((response: Response) => {
        this.selectedCategoryArticles = response.status === 'ok' ? response.articles : [];
      }, (error) => {
        throw error;
      });
  }

  setCategories(): void {
    this.categories = CATEGORIES.map(category => {
      return { key: category.key, value: category.value, expanded: false };
    });
  }

  setCountryValue(country: string): void {
    this.selectedCountry = COUNTRIES.find(el => el.key === country);
    this.title = `Top ${this.pageSize} news by category from ${this.selectedCountry.value}`;
  }
}
