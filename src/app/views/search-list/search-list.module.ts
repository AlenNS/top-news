import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { SharedModule } from './../../shared/shared.module';
import { SearchListComponent } from './search-list.component';

const routes: Routes = [
  {
    path: '',
    component: SearchListComponent
  }
];


@NgModule({
  declarations: [
    SearchListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class SearchListModule { }
