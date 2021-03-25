import { takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { RxjsService } from '../../rxjs-service';

@Component({
  selector: 'app-rxjs-child-01',
  template: ` 我是<span style="color: red;">会取消</span>订阅的组件 `,
  styles: [
    `
      :host {
        border: 1px dashed #000;
      }
    `
  ]
})
export class RxjsChild01Component implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.rxjsService.Subject$.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      console.log('我是取消订阅的组件');
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  constructor(private rxjsService: RxjsService) {}
}
