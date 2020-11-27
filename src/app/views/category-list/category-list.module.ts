import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { SharedModule } from './../../shared/shared.module';
import { CategoryListComponent } from './category-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  }
];

@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CategoryListModule { }
