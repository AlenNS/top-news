import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss']
})
export class TopNewsComponent implements OnInit {
  articles = [{
    title: '8 people shot at Mayfair Mall in Wisconsin, shooter at large - BNO News',
    description: 'A gunman opened fire at Mayfair Mall in Wisconsin on Friday afternoon, injuring at least eight people before fleeing the scene, local officials and witnesses say. A possible motive was not immediately known. The incident began at about 2:50 p.m. on Friday whe…',
    urlToImage: 'https://bnonews.com/wp-content/uploads/2020/11/11202020shooting.jpg'
  },
  {
    title: '8 people shot at Mayfair Mall in Wisconsin, shooter at large - BNO News',
    description: 'A gunman opened fire at Mayfair Mall in Wisconsin on Friday afternoon, injuring at least eight people before fleeing the scene, local officials and witnesses say. A possible motive was not immediately known. The incident began at about 2:50 p.m. on Friday whe…',
    urlToImage: 'https://bnonews.com/wp-content/uploads/2020/11/11202020shooting.jpg'
  },
  {
    title: '8 people shot at Mayfair Mall in Wisconsin, shooter at large - BNO News',
    description: 'A gunman opened fire at Mayfair Mall in Wisconsin on Friday afternoon, injuring at least eight people before fleeing the scene, local officials and witnesses say. A possible motive was not immediately known. The incident began at about 2:50 p.m. on Friday whe…',
    urlToImage: 'https://bnonews.com/wp-content/uploads/2020/11/11202020shooting.jpg'
  },
  {
    title: '8 people shot at Mayfair Mall in Wisconsin, shooter at large - BNO News',
    description: 'A gunman opened fire at Mayfair Mall in Wisconsin on Friday afternoon, injuring at least eight people before fleeing the scene, local officials and witnesses say. A possible motive was not immediately known. The incident began at about 2:50 p.m. on Friday whe…',
    urlToImage: 'https://bnonews.com/wp-content/uploads/2020/11/11202020shooting.jpg'
  },
  {
    title: '8 people shot at Mayfair Mall in Wisconsin, shooter at large - BNO News',
    description: 'A gunman opened fire at Mayfair Mall in Wisconsin on Friday afternoon, injuring at least eight people before fleeing the scene, local officials and witnesses say. A possible motive was not immediately known. The incident began at about 2:50 p.m. on Friday whe…',
    urlToImage: 'https://bnonews.com/wp-content/uploads/2020/11/11202020shooting.jpg'
  },
  {
    title: '8 people shot at Mayfair Mall in Wisconsin, shooter at large - BNO News',
    description: 'A gunman opened fire at Mayfair Mall in Wisconsin on Friday afternoon, injuring at least eight people before fleeing the scene, local officials and witnesses say. A possible motive was not immediately known. The incident began at about 2:50 p.m. on Friday whe…',
    urlToImage: 'https://bnonews.com/wp-content/uploads/2020/11/11202020shooting.jpg'
  }];

  topNewsTitle = 'Top news from Great Britain';

  constructor() { }

  ngOnInit(): void {
  }

}
