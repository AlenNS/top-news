import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Response } from './../data-types/response';

// API endpoint URL and api key values
const BASE_URL = 'https://newsapi.org/v2/top-headlines?';
// const API_KEY = '85c2278d358f439e899cd26d34b7b871';
const API_KEY = '64b10bfb4a8d4230b644895c0700b8d2'; // new API when first one limit is reached

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
}
