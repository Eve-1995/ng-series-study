import { Component } from '@angular/core';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';
import { ContainerBaseComponent } from './container-base.component';

@Component({
  template: `
    <app-content-fill [anchor]="anchor">
      <app-markdown [src]="appService.getPath('07', 'md')"></app-markdown>
      <app-markdown [src]="appService.getPath('05', 'html')"></app-markdown>
      <app-markdown [src]="appService.getPath('05', 'ts')"></app-markdown>
      <app-demo><app-demo-05></app-demo-05></app-demo>
      <app-markdown [src]="appService.getPath('08', 'md')"></app-markdown>
    </app-content-fill>
  `
})
export class Container03Component extends ContainerBaseComponent {
  anchor: Anchor[] = [
    {
      href: '#anchor001',
      title: '概述'
    },
    {
      href: '#anchor002',
      title: 'takeUntil'
    },
    {
      href: '#anchor003',
      title: 'debounceTime'
    }
  ];
}
