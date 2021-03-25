import { debounceTime, takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-child-03',
  template: `
  <input nz-input type="text" placeholder="输入文字试试?" [(ngModel)]="demo1" (ngModelChange)="demo1Change()">
  变更事件一共触发: {{ changeTimes }} 计数器累加: {{ count }}
  `
})
export class RxjsChild03Component implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  count = 0;
  changeTimes = 0;
  demo1: string;
  demo1Subject$ = new Subject();

  demo1Change(): void {
    this.changeTimes++;
    this.demo1Subject$.next();
  }

  ngOnInit(): void {
    // 代码 'takeUntil(this.unsubscribe$)' 可以先不看, 后文在取消订阅处会详讲.
    this.demo1Subject$.pipe(debounceTime(600), takeUntil(this.unsubscribe$)).subscribe(() => {
      this.count++;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
