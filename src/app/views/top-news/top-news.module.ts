import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { SharedModule } from './../../shared/shared.module';
import { TopNewsComponent } from './top-news.component';

const routes: Routes = [
  {
    path: '',
    component: TopNewsComponent
  }
];

@NgModule({
  declarations: [
    TopNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class TopNewsModule { }
