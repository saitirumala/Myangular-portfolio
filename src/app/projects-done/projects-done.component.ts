import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projects-done',
  templateUrl: './projects-done.component.html',
  styleUrls: ['./projects-done.component.css']
})
export class ProjectsDoneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
