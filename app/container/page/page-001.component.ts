import { Component } from '@angular/core';
import { PageBaseComponent } from './Page-base.component';

@Component({
  template: `
    <app-content-fill>
      <app-markdown [src]="appService.getPath('001', 'md')"></app-markdown>
    </app-content-fill>
  `
})
export class Page001Component extends PageBaseComponent {}
