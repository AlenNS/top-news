import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';

// Constants
import {
  COUNTRIES
} from './../../shared/data-types/constants';

// Data types
import {
  Article
} from './../../shared/data-types/article';
import {
  KeyValue
} from './../../shared/data-types/key-value';
import {
  Response
} from './../../shared/data-types/response';

// Services
import {
  TopNewsService
} from './../../shared/services/top-news.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  articles: Article[] = [];
  country = 'gb';
  noData = false;
  selectedCountry: KeyValue;
  title: string;

  searchCtrl = new FormControl('');

  // don't show no data found block on init
  init = true;

  constructor(
    private tns: TopNewsService
  ) {}

  ngOnInit(): void {
    this.setCountryValue(this.country);
  }

  changeCountry(country: string): void {
    this.setCountryValue(country);
    this.getArticles();
  }

  setCountryValue(country: string): void {
    this.selectedCountry = COUNTRIES.find(el => el.key === country);
    this.title = `Search top news from ${this.selectedCountry.value} by term`;
  }

  getArticles(): void {
    this.tns.getNewsByTerm(this.selectedCountry.key, this.searchCtrl.value)
      .subscribe((response: Response) => {
        this.init = false;
        this.articles = response.status === 'ok' ? response.articles : [];

        // Show no data available if articles are empty in the response
        if (!this.articles.length) {
          this.noData = true;
        }
      }, (error) => {
        throw error;
      });
  }

}
