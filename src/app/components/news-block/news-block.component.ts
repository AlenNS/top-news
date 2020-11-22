import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnInit {
  @Input() article: any;

  readMore = 'More details';

  constructor() { }

  ngOnInit(): void { }

  formatLink(title: string): string {
    const link = title.replace(/[^A-Z0-9]+/ig, '-').toLowerCase();
    return link;
  }

}
