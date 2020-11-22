import { Component, OnInit } from '@angular/core';

// Data types
import { Article } from './../../shared/data-types/article';
import { Response } from './../../shared/data-types/response';

// Services
import { TopNewsService } from './../../shared/services/top-news.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  articles: Article[] = [];
  selectedCountry = '';
  mainTitle: string;

  constructor(
    private tns: TopNewsService
  ) { }

  ngOnInit(): void {
  }

}
