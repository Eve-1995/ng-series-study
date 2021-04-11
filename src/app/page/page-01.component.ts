import { Component } from '@angular/core';

@Component({
  selector: 'app-render',
  template: `<app-markdown [src]="'app/markdown/01.md'"></app-markdown>
    <app-markdown [src]="'app/demo/demo-01.component.ts'"></app-markdown>
    <app-demo-01></app-demo-01>`
})
export class Page01Component {}
