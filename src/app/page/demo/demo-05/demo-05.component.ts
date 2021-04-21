import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-demo-05',
  templateUrl: './demo-05.component.html'
})
export class Demo05Component implements OnInit, OnDestroy {
  private subject$ = new Subject<void>();
  private unscubscribe$ = new Subject();

  ngOnInit(): void {
    // 通常是在初始化的时候就进行订阅
    this.subject$.pipe(takeUntil(this.unscubscribe$)).subscribe(() => this.nzmessage.success('收到数据啦'));
  }

  ngOnDestroy(): void {
    // 在销毁的生命周期里取消订阅
    this.unscubscribe$.next();
    this.unscubscribe$.complete();
  }

  constructor(private nzmessage: NzMessageService) {}
}
