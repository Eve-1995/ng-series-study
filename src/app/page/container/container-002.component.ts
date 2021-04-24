import { Component } from '@angular/core';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';
import { ContainerBaseComponent } from './container-base.component';

@Component({
  template: `
  <app-content-fill [anchor]="anchor">
    <app-markdown [src]="appService.getPath('002', 'md')"></app-markdown>
    <app-markdown [src]="appService.getPath('001', 'html')"></app-markdown>
    <app-markdown [src]="appService.getPath('001', 'ts')"></app-markdown>
    <app-demo><app-demo-001></app-demo-001></app-demo>
    <app-markdown [src]="appService.getPath('003', 'md')"></app-markdown>
    <app-markdown [src]="appService.getPath('002', 'html')"></app-markdown>
    <app-markdown [src]="appService.getPath('002', 'ts')"></app-markdown>
    <app-demo><app-demo-002></app-demo-002></app-demo>
    <app-markdown [src]="appService.getPath('004', 'md')"></app-markdown>
    <app-markdown [src]="appService.getPath('003', 'html')"></app-markdown>
    <app-markdown [src]="appService.getPath('003', 'ts')"></app-markdown>
    <app-demo><app-demo-003></app-demo-003></app-demo>
    <app-markdown [src]="appService.getPath('005', 'md')"></app-markdown>
    <app-markdown [src]="appService.getPath('004', 'html')"></app-markdown>
    <app-markdown [src]="appService.getPath('004', 'ts')"></app-markdown>
    <app-demo><app-demo-004></app-demo-004></app-demo>
    <app-markdown [src]="appService.getPath('006', 'md')"></app-markdown>
  </app-content-fill>
  `
})
export class Container002Component extends ContainerBaseComponent {
  anchor: Anchor[] = [
    {
      href: '#anchor001',
      title: '概述'
    },
    {
      href: '#anchor002',
      title: '基础案例'
    },
    {
      href: '#anchor003',
      title: 'Subject'
    },
    {
      href: '#anchor004',
      title: '取消订阅'
    },
    {
      href: '#anchor005',
      title: '取消订阅的最佳实践'
    },
    {
      href: '#anchor006',
      title: '无需取消的订阅'
    }
  ];
}
