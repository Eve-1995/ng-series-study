import { Component } from '@angular/core';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';

@Component({
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.scss']
})
export class InitialFormComponent {
  anchor: Anchor[] = [
    {
      href: '#resume',
      title: '概述'
    },
    {
      href: '#event',
      title: '$event'
    },
    {
      href: '#var',
      title: '模板引用变量'
    },
    {
      href: '#key-enter',
      title: 'key.enter'
    },
    {
      href: '#blur',
      title: 'blur'
    }
  ];
  value;
  onKey(event: any) {
    console.log(event);
    this.value = event.target.value;
  }
  value2;
  onEnter(value: any) {
    this.value2 = value;
  }
  value3;
  onBlur(value: any) {
    this.value3 = value;
  }
  code1 = `
    <input nz-input (keyup)="onKey($event)" placeholder="尝试输入一些内容,观察控制台信息"><br/>
    你刚刚输入的是:{{value}}
    `;
  code2 = `
    value;
    onKey(event: any) {
        console.log(event);
        this.value = event.target.value;
    }
    `;
  code3 = `
    <input nz-input #inputRef placeholder="尝试输入一些内容,观察模板变化"><br/>
    你刚刚输入的是:{{inputRef.value}}
    `;
  code4 = `
    <input #inputRef2 (keyup.enter)="onEnter(inputRef2.value)">
    <p>{{value2}}</p>
    `;
  code5 = `
    value2;
    onEnter(value: any) {
        this.value2 = value;
    }
    `;
  code6 = `
    <input nz-input #inputRef3 (blur)="onBlur(inputRef3.value)" placeholder="尝试输入一些内容后失去焦点,观察模板变化">
    <p>{{value3}}</p>
    `;
  code7 = `
    value3;
    onBlur(value: any) {
        this.value3 = value;
    }
    `;
}
