import { Component } from '@angular/core';
import { ContainerBaseComponent } from './container-base.component';

@Component({
  template: `
    <app-content-fill>
      <app-markdown [src]="appService.getPath('07', 'md')"></app-markdown>
      <app-markdown [src]="appService.getPath('05', 'html')"></app-markdown>
      <app-markdown [src]="appService.getPath('05', 'ts')"></app-markdown>
      <app-demo><app-demo-05></app-demo-05></app-demo>
      <app-markdown [src]="appService.getPath('08', 'md')"></app-markdown>
    </app-content-fill>
  `
})
export class Container03Component extends ContainerBaseComponent {}
