import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Angular material dependencies
import { NgMaterialDependenciesModule } from './ng-material-dependencies.module';

// View components
import { CategoryListComponent } from './../views/category-list/category-list.component';
import { SearchListComponent } from './../views/search-list/search-list.component';
import { TopNewsComponent } from './../views/top-news/top-news.component';

// Shared components
import { FooterComponent } from './../components/footer/footer.component';
import { LoadingSpinnerComponent } from './../components/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { NewsBlockComponent } from './../components/news-block/news-block.component';
import { NewsBlockModalComponent } from './../components/news-block/news-block-modal/news-block-modal.component';

// Pipes
import { NoDataPipe } from './pipes/no-data.pipe';

// Services
import { TopNewsService } from './services/top-news.service';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    // View components
    CategoryListComponent,
    SearchListComponent,
    TopNewsComponent,
    // Shared components
    FooterComponent,
    LoadingSpinnerComponent,
    NavbarComponent,
    NewsBlockComponent,
    NewsBlockModalComponent,
    // Pipes
    NoDataPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgMaterialDependenciesModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    // Pipes
    NoDataPipe,
    // Shared components
    FooterComponent,
    LoadingSpinnerComponent,
    NavbarComponent,
    NewsBlockComponent,
    NewsBlockModalComponent,
    TranslateModule
  ],
  providers: [
    // Pipes
    NoDataPipe,
    // Services
    TopNewsService,
    TranslateService,
    { provide: LOCALE_ID, useValue: 'en-EN' }
  ]
})

export class SharedModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
