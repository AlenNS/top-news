import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        TranslateModule
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
