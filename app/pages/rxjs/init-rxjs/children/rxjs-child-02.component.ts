import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../../rxjs-service';

@Component({
  selector: 'app-rxjs-child-02',
  template: ` 我是<span style="color: red;">不会取消</span>订阅的组件 `,
  styles: [
    `
      :host {
        border: 1px dashed #000;
      }
    `
  ]
})
export class RxjsChild02Component implements OnInit {
  ngOnInit(): void {
    this.rxjsService.Subject$.subscribe(() => {
      console.log('我是未取消订阅的组件');
    });
  }

  constructor(private rxjsService: RxjsService) {}
}
