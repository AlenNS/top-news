import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

// Angular material dependencies
import { NgMaterialDependenciesModule } from './ng-material-dependencies.module';

// View components
import { TopNewsComponent } from './../views/top-news/top-news.component';
import { SearchListComponent } from './../views/search-list/search-list.component';
import { CategoryListComponent } from './../views/category-list/category-list.component';

// Shared components
import { FooterComponent } from './../components/footer/footer.component';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { NewsBlockComponent } from './../components/news-block/news-block.component';

// Services
import { TopNewsService } from './services/top-news.service';

@NgModule({
  declarations: [
    CategoryListComponent,
    SearchListComponent,
    TopNewsComponent,
    FooterComponent,
    NavbarComponent,
    NewsBlockComponent
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
