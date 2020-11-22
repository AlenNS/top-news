import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Response } from './../data-types/response';

// API endpoint URL and api key values
const BASE_URL = 'https://newsapi.org/v2/top-headlines?';
const API_KEY = '85c2278d358f439e899cd26d34b7b871';

const headers = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable()
export class TopNewsService {
    constructor(
        private http: HttpClient
    ) { }

    getAllNews(country: string): Observable<Response> {
        const FULL_URL = BASE_URL + 'apiKey=' + API_KEY + '&country=' + country;

        return this.http
          .get<Response>(FULL_URL, { headers })
          .pipe(catchError(err => throwError(err)));
        }
}
