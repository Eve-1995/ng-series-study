import { Component } from '@angular/core';
import { ContainerBaseComponent } from './container-base.component';

@Component({
  template: `
    <app-content-fill>
      <app-markdown [src]="appService.getPath('07', 'md')"></app-markdown>
    </app-content-fill>
  `
})
export class Container03Component extends ContainerBaseComponent {}
