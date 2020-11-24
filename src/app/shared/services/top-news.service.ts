import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Response } from './../data-types/response';

// Add proxy URL
// const PROXY = 'https://cors-anywhere.herokuapp.com/';
// API endpoint URL and api key values
const BASE_URL = 'https://newsapi.org/v2/top-headlines?';
const API_KEY = '85c2278d358f439e899cd26d34b7b871';
// const API_KEY = '64b10bfb4a8d4230b644895c0700b8d2'; // new API when first one limit is reached
// const API_KEY = '0ca816426404456bbe37a705f6590e70'; // new API when first one limit is reached
// const API_KEY = '2afcebc275a34077af2c446c8b326767'; // new API when first one limit is reached
// const API_KEY = '3ba7ca94946444e7b61b4a199985f662'; // new API when first one limit is reached

const headers = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable()
export class TopNewsService {
    constructor(
        private http: HttpClient
    ) { }

    getNewsByCountry(country: string): Observable<Response> {
        const FULL_URL = BASE_URL + 'apiKey=' + API_KEY + '&country=' + country;

        return this.http
          .get<Response>(FULL_URL, { headers })
          .pipe(catchError(err => throwError(err)));
    }

    getNewsByCategory(country: string, category: string, pageSize?: number): Observable<Response> {
      let FULL_URL = BASE_URL + 'apiKey=' + API_KEY + '&country=' + country + '&category=' + category;

      if (pageSize) {
        FULL_URL += '&pageSize=' + pageSize;
      }

      return this.http
        .get<Response>(FULL_URL, { headers })
        .pipe(catchError(err => throwError(err)));
    }

    getNewsByTerm(country: string, searchTerm: string): Observable<Response> {
      const FULL_URL = BASE_URL + 'apiKey=' + API_KEY + '&country=' + country + '&q=' + searchTerm.toString();

      return this.http
        .get<Response>(FULL_URL, { headers })
        .pipe(catchError(err => throwError(err)));
    }
}
