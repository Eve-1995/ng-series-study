import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-demo-04',
  templateUrl: './demo-04.component.html'
})
export class Demo04Component {
  private subject$ = new Subject<void>();
  private subscriptionList: Subscription[] = [];

  doSubscribe(): void {
    // subscribe 会返回他的订阅对象, 我们先把他存起来
    const subscription = this.subject$.subscribe(() => this.nzmessage.success('收到数据啦'));
    this.subscriptionList.push(subscription);
  }

  doUnsubscribe(): void {
    // 遍历之前存的订阅对象数组, 依次取消订阅
    this.subscriptionList.forEach(v => v.unsubscribe());
  }

  send(): void {
    this.subject$.next();
  }

  constructor(private nzmessage: NzMessageService) {}
}
