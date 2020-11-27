import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  loadChildren: () => import('./views/top-news/top-news.module').then(path => path.TopNewsModule)
}, {
  path: 'categories',
  loadChildren: () => import('./views/category-list/category-list.module').then(path => path.CategoryListModule)
}, {
  path: 'category/:category',
  loadChildren: () => import('./views/top-news/top-news.module').then(path => path.TopNewsModule)
}, {
  path: 'search',
  loadChildren: () => import('./views/search-list/search-list.module').then(path => path.SearchListModule)
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TranslateModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
