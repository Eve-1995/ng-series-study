import { Component } from '@angular/core';
import { ContainerBaseComponent } from './container-base.component';

@Component({
  template: `
  <app-content-fill>
    <app-markdown [src]="appService.getPath('00', 'md')"></app-markdown>
  </app-content-fill>
  `
})
export class Container00Component extends ContainerBaseComponent {
}
