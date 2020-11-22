import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryListComponent } from './views/category-list/category-list.component';
import { NewsBlockComponent } from './components/news-block/news-block.component';
import { TopNewsComponent } from './views/top-news/top-news.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: TopNewsComponent
}, {
  path: 'news/:title',
  component: NewsBlockComponent
}, {
  path: 'categories',
  component: CategoryListComponent
}, {
  path: 'category/:category',
  component: TopNewsComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
