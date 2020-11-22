import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
    TranslateModule,
    NgMaterialDependenciesModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NewsBlockComponent
  ],
  providers: []
})

export class SharedModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
