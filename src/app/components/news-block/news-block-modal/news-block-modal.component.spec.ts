import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { NoDataPipe } from './../../../shared/pipes/no-data.pipe';

import { NewsBlockModalComponent } from './news-block-modal.component';

describe('NewsBlockModalComponent', () => {
  let component: NewsBlockModalComponent;
  let fixture: ComponentFixture<NewsBlockModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsBlockModalComponent, NoDataPipe ],
      imports: [MatDialogModule, TranslateModule.forRoot()],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBlockModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
