import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(private router: Router) { }
  paragraph: String = "Bootstrap is the most popular HTML, CSS, and JavaScript framework for web front-end development. It’s great for developing responsive, mobile-first web sites. The Bootstrap website is available at http://getbootstrap.com/. The Bootstrap framework can be used together with modern JavaScript web & mobile frameworks like Angular. In the following you’ll learn how to use the Bootstrap framework in your Angular project. Furthermore we’ll take a look at the Ng-Bootstrap project which delivers Angular Bootstrap components which can be used out of the box.";

  ngOnInit() {
  }

  onClickSeeMore() {
  	this.paragraph = "Bootstrap is the most popular HTML, CSS, and JavaScript framework for web front-end development. It’s great for developing responsive, mobile-first web sites. The Bootstrap website is available at http://getbootstrap.com/. The Bootstrap framework can be used together with modern JavaScript web & mobile frameworks like Angular. In the following you’ll learn how to use the Bootstrap framework in your Angular project. Furthermore we’ll take a look at the Ng-Bootstrap project which delivers Angular Bootstrap components which can be used out of the box.The Bootstrap website is available at http://getbootstrap.com/. The Bootstrap framework can be used together with modern JavaScript web & mobile frameworks like Angular. In the following you’ll learn how to use the Bootstrap framework in your Angular project. Furthermore we’ll take a look at the Ng-Bootstrap project which delivers Angular Bootstrap components which can be used out of the box.";
  }

}
