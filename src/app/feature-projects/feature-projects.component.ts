import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feature-projects',
  templateUrl: './feature-projects.component.html',
  styleUrls: ['./feature-projects.component.css']
})
export class FeatureProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
