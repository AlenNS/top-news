import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

// Angular material dependencies
import { NgMaterialDependenciesModule } from './ng-material-dependencies.module';

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

@NgModule({
  declarations: [
    // View components
    // Shared components
    FooterComponent,
    LoadingSpinnerComponent,
    NavbarComponent,
    NewsBlockComponent,
    NewsBlockModalComponent,
    // Pipes
    NoDataPipe
  ],
  entryComponents: [
    NewsBlockModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgMaterialDependenciesModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    NgMaterialDependenciesModule,
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
    // Modules
    HttpClientModule,
    // Pipes
    NoDataPipe,
    // Services
    TopNewsService
  ]
})

export class SharedModule {
  constructor() { }
}
