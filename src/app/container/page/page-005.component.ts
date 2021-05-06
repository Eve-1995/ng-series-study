import { Component } from '@angular/core';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';
import { PageBaseComponent } from './Page-base.component';

@Component({
  template: `
    <app-content-fill [anchor]="anchor">
      <app-markdown [src]="appService.getPath('010', 'md')"></app-markdown>
    </app-content-fill>
  `
})
export class Page005Component extends PageBaseComponent {
  anchor: Anchor[] = [
    {
      href: '#anchor001',
      title: 'type与enum的区别',
      children: [
        {
          href: '#anchor002',
          title: '在TypeScript中使用'
        },
        {
          href: '#anchor003',
          title: '在HTML中使用'
        },
        {
          href: '#anchor004',
          title: '总结'
        }
      ]
    },
    {
      href: '#anchor005',
      title: 'TypeScript编译后是什么?',
      children: [
        {
          href: '#anchor006',
          title: 'class'
        },
        {
          href: '#anchor007',
          title: 'interface'
        },
        {
          href: '#anchor008',
          title: 'enum'
        },
        {
          href: '#anchor009',
          title: 'type'
        },
        {
          href: '#anchor010',
          title: '总结'
        }
      ]
    }
  ];
}
