import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { SharedModule } from './../../shared/shared.module';
import { CategoryListComponent } from './category-list.component';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

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
