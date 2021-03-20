import { take } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable, of, timer, Subject } from 'rxjs';
@Component({
  templateUrl: './init-rxjs.component.html',
  styleUrls: ['init-rxjs.component.scss']
})
export class InitRxjsComponent {
  code1 = `
    <div nz-row>
        <div nz-col nzSpan="12">
            <button (click)="demo1()" nz-button nzType="primary">演示</button>
        </div>
        <div nz-col nzSpan="12">
            {{demo1Result}}
        </div>
    </div>
    `;
  code2 = `
    import { Observable, of } from 'rxjs';

    demo1Result;
    demo1() {
        const observable$ = Observable.create(observer => {//创建observable
            let index = 0;
            observer.next(index);
            setInterval(() => {
                index++;
                observer.next(index);//执行
            }, 1000);
        });
        const subscription = observable$.subscribe(value => {//订阅observable
            this.demo1Result = value;
            if (value === 10) {
                subscription.unsubscribe();//清理,即取消订阅
            }
        });
    }
    `;
  demo1Result;
  demo1() {
    const observable$ = Observable.create(observer => {
      //创建observable
      let index = 0;
      observer.next(index);
      setInterval(() => {
        index++;
        observer.next(index); //执行
      }, 1000);
    });
    const subscription = observable$.subscribe(value => {
      //订阅observable
      this.demo1Result = value;
      if (value === 10) {
        subscription.unsubscribe(); //清理,即取消订阅
      }
    });
  }
  demo2Result;
  demo2() {
    const observable$ = Observable.create(observer => {
      let index = 0;
      observer.next(index);
      setInterval(() => {
        index++;
        if (index === 10) {
          observer.complete();
        }
        if (index === 11) {
          //不会执行,因为在第10秒已经执行了complete
          observer.error('finish');
        }
        observer.next(index);
      }, 1000);
    });
    const _observer = {
      next: value => (this.demo2Result = '收到一个值:' + value),
      error: err => (this.demo2Result = '收到一个错误:' + err),
      complete: () => (this.demo2Result = '已完成计时!')
    };
    observable$.subscribe(_observer);
  }
  code3 = `
    demo2Result;
    demo2() {
        const observable$ = Observable.create(observer => {
            let index = 0;
            observer.next(index);
            setInterval(() => {
                index++;
                if (index === 10) {
                    observer.complete();
                }
                if (index === 11) {//不会执行,因为在第10秒已经执行了complete
                    observer.error('finish');
                }
                observer.next(index);
            }, 1000);
        });
        const _observer = {
            next: value => this.demo2Result = '收到一个值:' + value,
            error: err => this.demo2Result = '收到一个错误:' + err,
            complete: () => this.demo2Result = '已完成计时!',
        };
        observable$.subscribe(_observer);
    }
    `;
  demo3Result;
  demo3() {
    const observable$ = timer(0, 1000).pipe(take(11));
    observable$.subscribe(value => {
      this.demo3Result = value + '';
    });
  }
  code4 = `
    demo3() {
        const observable$ = timer(0,1000).pipe(take(11));
        observable$.subscribe(value => {
            this.demo3Result = value + '';
        });
    }
    `;
  customObservable(observable) {
    return Observable.create(observer => {
      observable.subscribe(value => {
        observer.next(value * 10);
      });
    });
  }
  demo4Result = '';
  demo4() {
    this.demo4Result = '';
    const observable$ = of(1, 2, 3);
    this.customObservable(observable$).subscribe(value => {
      this.demo4Result += value + ' ';
    });
  }
  code5 = `
    customObservable(observable) {
        return Observable.create(observer => {
            observable.subscribe(value => {
                observer.next(value * 10);
            });
        });
    }
    demo4Result = '';
    demo4() {
        this.demo3Result = '';
        const observable$ = of(1, 2, 3);//将值依次发出
        this.customObservable(observable$).subscribe(value => {
            this.demo4Result += value + ' ';
        });
    }
    `;
  demo6Result = '';
  demo6() {
    const subject = new Subject();
    subject.subscribe({
      next: value => (this.demo6Result += 'observerA: ' + value + ' ')
    });
    subject.subscribe({
      next: value => (this.demo6Result += 'observerB: ' + value + ' ')
    });
    subject.next(1);
  }
  code6 = `
    demo6Result = '';
    demo6() {
        const subject = new Subject();
        subject.subscribe({
            next: (value) => this.demo6Result += 'observerA: ' + value + ' '
        });
        subject.subscribe({
            next: (value) => this.demo6Result += 'observerB: ' + value + ' '
        });
        subject.next(1);
    }
    `;
  demo7Result = '';
  demo7() {
    this.demo7Result = '';
    const subject = new Subject();
    subject.subscribe({
      next: value => (this.demo7Result += 'observerA: ' + value + ' ')
    });
    subject.subscribe({
      next: value => (this.demo7Result += 'observerB: ' + value + ' ')
    });
    of(1, 2).subscribe(subject);
  }
  code7 = `
    demo7Result = '';
    demo7() {
        this.demo7Result = '';
        const subject = new Subject();
        subject.subscribe({
            next: (value) => this.demo7Result += 'observerA: ' + value + ' '
        });
        subject.subscribe({
            next: (value) => this.demo7Result += 'observerB: ' + value + ' '
        });
        of(1, 2).subscribe(subject);
    }
    `;
}
