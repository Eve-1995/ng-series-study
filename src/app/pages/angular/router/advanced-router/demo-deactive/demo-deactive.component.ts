import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './demo-deactive.component.html',
  styleUrls: ['./demo-deactive.component.scss']
})
export class DemoDeactiveComponent {
  name;
  words;
  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.subscribe(queryParams => {
      this.name = queryParams.name;
      this.words = queryParams.words;
    });
  }
  back() {
    this.router.navigate(['/angular/advanced-router']);
  }
}
