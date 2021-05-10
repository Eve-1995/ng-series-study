import { Component } from '@angular/core';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';
import { PageBaseComponent } from './Page-base.component';

@Component({
  template: `
    <app-content-fill>
      <app-markdown [src]="appService.getPath('011', 'md')"></app-markdown>
      <app-markdown [src]="appService.getPath('006', 'html')"></app-markdown>
      <app-markdown [src]="appService.getPath('006', 'scss')"></app-markdown>
      <app-markdown [src]="appService.getPath('006', 'ts')"></app-markdown>
      <app-markdown [src]="appService.getPath('012', 'md')"></app-markdown>
      <app-demo><app-demo-006></app-demo-006></app-demo>
      <app-markdown [src]="appService.getPath('013', 'md')"></app-markdown>
      <app-markdown [src]="appService.getPath('007', 'html')"></app-markdown>
      <app-markdown [src]="appService.getPath('007', 'ts')"></app-markdown>
      <app-demo><app-demo-007></app-demo-007></app-demo>
      <app-markdown [src]="appService.getPath('014', 'md')"></app-markdown>
      <app-demo><app-demo-008></app-demo-008></app-demo>
    </app-content-fill>
  `
})
export class Page006Component extends PageBaseComponent {
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
