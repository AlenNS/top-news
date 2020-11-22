import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsBlockComponent } from './components/news-block/news-block.component';
import { TopNewsComponent } from './views/top-news/top-news.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: TopNewsComponent
}, {
  path: 'news/:title',
  component: NewsBlockComponent
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
