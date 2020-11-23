import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// Constants
import { COUNTRIES } from './../../shared/data-types/constants';

// Data types
import { Article } from './../../shared/data-types/article';
import { KeyValue } from './../../shared/data-types/key-value';
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
  country = 'gb';
  selectedCountry: KeyValue;
  title: string;

  searchCtrl = new FormControl('');

  // don't show no data found block on init
  init = true;

  constructor(
    private tns: TopNewsService
  ) { }

  ngOnInit(): void {
    this.setCountryValue();
  }

  setCountryValue(): void {
    this.selectedCountry = COUNTRIES.find(el => el.key === this.country);
    this.title = `Search top news from ${this.selectedCountry.value} by term`;
  }

  getArticles(): void {
    // if (!this.searchCtrl.value && this.init) {
    //   return;
    // }

    this.tns.getNewsByTerm(this.selectedCountry.key, this.searchCtrl.value)
        .subscribe((response: Response) => {
          this.init = false;
          this.articles = response.status === 'ok' ? response.articles : [];
    }, (error) => {
      throw error;
    });
  }

}
