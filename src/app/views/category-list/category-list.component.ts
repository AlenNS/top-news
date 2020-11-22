import { Component, OnInit } from '@angular/core';

// Constants
import { CATEGORIES } from './../../shared/data-types/constants';

// Data types
import { Article } from './../../shared/data-types/article';
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
  categories: string[] = CATEGORIES;
  selectedCategoryArticles: Article[] = [];

  country = 'gb';
  pageSize = 5;
  panelOpenState = false;
  selectedCountry = 'Great Britain';
  categoryMainTitle = `Top ${this.pageSize} news by category from`;

  constructor(
    private tns: TopNewsService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    for (const category of this.categories) {
      this.getArticles(category);
    }
  }

  getArticles(category: string): any {
    this.panelOpenState = true;
    this.selectedCategoryArticles = [];

    this.tns.getNewsByCategory(this.country, category, this.pageSize)
      .subscribe((response: Response) => {
        this.selectedCategoryArticles = response.status === 'ok' ? response.articles : [];
      }, (error) => {
        throw error;
      });
  }
}
