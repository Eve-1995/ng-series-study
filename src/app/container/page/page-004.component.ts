import { Component } from '@angular/core';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';
import { PageBaseComponent } from './Page-base.component';

@Component({
  template: `
    <app-content-fill [anchor]="anchor">
      <app-markdown [src]="appService.getPath('009', 'md')"></app-markdown>
    </app-content-fill>
  `
})
export class Page004Component extends PageBaseComponent {
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
