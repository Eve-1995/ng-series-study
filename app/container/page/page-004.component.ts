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
      title: '类型声明'
    },
    {
      href: '#anchor003',
      title: 'interface'
    },
    {
      href: '#anchor004',
      title: '泛型'
    },
    {
      href: '#anchor005',
      title: '继承与泛型的区别'
    },
    {
      href: '#anchor006',
      title: 'enum'
    },
    {
      href: '#anchor007',
      title: 'type'
    }
  ];
}
