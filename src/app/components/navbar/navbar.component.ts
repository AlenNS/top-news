import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements DoCheck {
  isHome = false;
  isCategories = false;
  isSearch = false;

  showMenu = false;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngDoCheck(): void {
    this.getParams();
  }

  getParams(): void {
    let active = location.pathname;
    const singleCategory = '/category';

    if (active.substring(0, 9) === singleCategory) {
      active = singleCategory;
    }

    switch (active) {
      case '/':
        this.initActiveState();
        this.isHome = true;
        break;
      case '/categories':
      case '/category':
        this.initActiveState();
        this.isCategories = true;
        break;
      case '/search':
        this.initActiveState();
        this.isSearch = true;
        break;

      default:
      case '/':
        this.initActiveState();
        this.isHome = true;
        break;
    }
  }

  initActiveState(): void {
    this.isHome = false;
    this.isCategories = false;
    this.isSearch = false;
  }
}
