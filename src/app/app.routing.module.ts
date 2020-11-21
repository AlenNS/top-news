import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import {
  TopNewsComponent
} from './views/top-news/top-news.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
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
