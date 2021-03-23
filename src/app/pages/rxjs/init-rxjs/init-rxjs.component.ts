import { debounceTime, takeUntil } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { RxjsService } from '../rxjs-service';
import { AppService } from 'src/app/app.service';
@Component({
  templateUrl: './init-rxjs.component.html',
  styleUrls: ['init-rxjs.component.scss']
})
export class InitRxjsComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();

  count = 0;
  changeTimes = 0;
  demo1: string;
  demo1Subject$ = new Subject();

  code1 = `
  <input nz-input type="text" placeholder="输入文字试试?" [(ngModel)]="demo1" (ngModelChange)="demo1Change()">
  `;
  code2 = `
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
      this.demo1Subject$.pipe(debounceTime(600), takeUntil(this.unsubscribe$)).subscribe(() => {
        this.count++;
      });
    }

    ngOnDestroy(): void {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
  `;

  demo1Change(): void {
    this.changeTimes++;
    this.demo1Subject$.next();
  }

  emit(): void {
    this.rxjsService.Subject$.next();
  }

  constructor(private rxjsService: RxjsService, public appService: AppService) {}

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
