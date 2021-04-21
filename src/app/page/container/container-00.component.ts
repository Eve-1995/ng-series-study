import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  template: `
  <app-content-fill>
    <app-markdown [src]="appService.getPath('00', 'md')"></app-markdown>
  </app-content-fill>
  `
})
export class Container00Component {
  constructor(public appService: AppService) {}
}
