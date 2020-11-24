import { NoDataPipe } from './../../shared/pipes/no-data.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlockComponent } from './news-block.component';
import { TopNewsService } from './../../shared/services/top-news.service';
import { HttpHandler } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('NewsBlockComponent', () => {
  let component: NewsBlockComponent;
  let fixture: ComponentFixture<NewsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsBlockComponent, NoDataPipe ],
      imports: [ MatTooltipModule, MatDialogModule, TranslateModule.forRoot({}) ],
      providers: [ HttpHandler, TopNewsService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
