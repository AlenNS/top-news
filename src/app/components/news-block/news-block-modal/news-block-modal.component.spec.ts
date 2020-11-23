import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBlockModalComponent } from './news-block-modal.component';

describe('NewsBlockModalComponent', () => {
  let component: NewsBlockModalComponent;
  let fixture: ComponentFixture<NewsBlockModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsBlockModalComponent ]
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
