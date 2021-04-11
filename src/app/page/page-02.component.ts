import { Component } from '@angular/core';

@Component({
  selector: 'app-render',
  template: `<app-markdown [src]="'app/markdown/02.md'"></app-markdown>
    <app-markdown [src]="'app/demo/demo-02.component.ts'"></app-markdown>
    <app-demo-02></app-demo-02>`
})
export class Page02Component {}
