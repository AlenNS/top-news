import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TopNewsComponent } from './top-news.component';
import { TopNewsService } from './../../shared/services/top-news.service';

describe('TopNewsComponent', () => {
  let component: TopNewsComponent;
  let fixture: ComponentFixture<TopNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNewsComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ TopNewsService ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
