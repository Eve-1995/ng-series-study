import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './params-router.component.html',
  styleUrls: ['./params-router.component.scss']
})
export class ParamsRouterComponent {
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
