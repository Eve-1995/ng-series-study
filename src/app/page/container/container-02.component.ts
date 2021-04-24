import { Component } from '@angular/core';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';
import { ContainerBaseComponent } from './container-base.component';

@Component({
  template: `
  <app-content-fill [anchor]="anchor">
    <app-markdown [src]="appService.getPath('02', 'md')"></app-markdown>
    <app-markdown [src]="appService.getPath('01', 'html')"></app-markdown>
    <app-markdown [src]="appService.getPath('01', 'ts')"></app-markdown>
    <app-demo><app-demo-01></app-demo-01></app-demo>
    <app-markdown [src]="appService.getPath('03', 'md')"></app-markdown>
    <app-markdown [src]="appService.getPath('02', 'html')"></app-markdown>
    <app-markdown [src]="appService.getPath('02', 'ts')"></app-markdown>
    <app-demo><app-demo-02></app-demo-02></app-demo>
    <app-markdown [src]="appService.getPath('04', 'md')"></app-markdown>
    <app-markdown [src]="appService.getPath('03', 'html')"></app-markdown>
    <app-markdown [src]="appService.getPath('03', 'ts')"></app-markdown>
    <app-demo><app-demo-03></app-demo-03></app-demo>
    <app-markdown [src]="appService.getPath('05', 'md')"></app-markdown>
    <app-markdown [src]="appService.getPath('04', 'html')"></app-markdown>
    <app-markdown [src]="appService.getPath('04', 'ts')"></app-markdown>
    <app-demo><app-demo-04></app-demo-04></app-demo>
    <app-markdown [src]="appService.getPath('06', 'md')"></app-markdown>
    <!--
    <app-markdown [src]="appService.getPath('05', 'html')"></app-markdown>
    <app-markdown [src]="appService.getPath('05', 'ts')"></app-markdown>
    <app-demo><app-demo-05></app-demo-05></app-demo>
    -->
    <app-markdown [src]="appService.getPath('07', 'md')"></app-markdown>
  </app-content-fill>
  `
})
export class Container02Component extends ContainerBaseComponent {
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
