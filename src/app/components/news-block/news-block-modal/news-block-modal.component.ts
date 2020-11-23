import { Component, OnInit } from '@angular/core';

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

  noDataPlaceholder = 'No content retrieved from server';

  constructor() { }

  ngOnInit(): void {
  }

}
