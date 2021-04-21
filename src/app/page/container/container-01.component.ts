import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  template: `
  <app-content-fill>
    <app-markdown [src]="appService.getPath('01', 'md')"></app-markdown>
  </app-content-fill>
  `
})
export class Container01Component {
  constructor(public appService: AppService) {}
}
