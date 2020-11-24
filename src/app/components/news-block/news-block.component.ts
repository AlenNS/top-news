import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

// Data types
import { Article } from './../../shared/data-types/article';

// Components
import { NewsBlockModalComponent } from './news-block-modal/news-block-modal.component';
@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnInit {
  @Input() article: Article;

  noDataPlaceholder: string;

  constructor(
    public dialog: MatDialog,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.noDataPlaceholder = this.translate.instant('no_data');
  }

  formatLink(title: string): string {
    const link = title.replace(/[^A-Z0-9]+/ig, '-').toLowerCase();
    return link;
  }

  openDialog(): void {
    const newsDialog = this.dialog.open(NewsBlockModalComponent, {
      height: '75vh',
      width: '50vw'
    });

    newsDialog.componentInstance.title = this.article.title;
    newsDialog.componentInstance.urlToImage = this.article.urlToImage;
    newsDialog.componentInstance.source = this.article.source.name;
    newsDialog.componentInstance.content = this.article.content;
  }

}
