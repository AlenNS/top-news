import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-news-block-modal',
  templateUrl: './news-block-modal.component.html',
  styleUrls: ['./news-block-modal.component.scss']
})
export class NewsBlockModalComponent implements OnInit {
  content: string;
  source: string;
  title: string;
  urlToImage: string;

  noDataPlaceholder: string;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.noDataPlaceholder = this.translate.instant('no_data');
  }

}
