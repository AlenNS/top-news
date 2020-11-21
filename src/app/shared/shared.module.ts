import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { NgMaterialDependenciesModule } from './ng-material-dependencies.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        TranslateModule,
        NgMaterialDependenciesModule
    ],
    exports: [],
    providers: []
})

export class SharedModule {
    constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
