import { Component } from '@angular/core';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';
import { ContainerBaseComponent } from './container-base.component';

@Component({
  template: `
    <app-content-fill [anchor]="anchor">
      <app-markdown [src]="appService.getPath('007', 'md')"></app-markdown>
      <app-markdown [src]="appService.getPath('005', 'html')"></app-markdown>
      <app-markdown [src]="appService.getPath('005', 'ts')"></app-markdown>
      <app-demo><app-demo-005></app-demo-005></app-demo>
      <app-markdown [src]="appService.getPath('008', 'md')"></app-markdown>
    </app-content-fill>
  `
})
export class Container003Component extends ContainerBaseComponent {
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
