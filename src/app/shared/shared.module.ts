import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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

// Services
import { TopNewsService } from './services/top-news.service';

@NgModule({
  declarations: [
    CategoryListComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    NavbarComponent,
    NewsBlockComponent,
    NewsBlockModalComponent,
    SearchListComponent,
    TopNewsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgMaterialDependenciesModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NewsBlockComponent,
    NewsBlockModalComponent,
    LoadingSpinnerComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    TopNewsService
  ]
})

export class SharedModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
