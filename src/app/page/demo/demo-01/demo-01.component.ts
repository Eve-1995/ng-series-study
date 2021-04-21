import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-demo-01',
  templateUrl: './demo-01.component.html'
})
export class Demo01Component {
  receiveNum = 0; // 已经收到的报纸数量

  // me, 也就是我, 是一个Observer对象. Observer<void> 是指 next 所接收到的参数是void. 如果你指定为string, 则next收到的参数类型为string
  private me: Observer<void> = {
    next: () => this.receiveNum++,
    error: () => {},
    complete: () => this.nzmessage.success('投递完成')
  };

  // 报社
  private postman: Observable<unknown> = new Observable(observer => {
    setTimeout(() => {
      observer.next(); // 这一行代码将会触发me的 next 回调
      observer.complete(); // 这一行代码将会触发me的 complete 回调
      // observer.error(); // 这一行代码将会触发me的 error 回调
    }, 500);
  });

  doSubscribe(): void {
    this.postman.subscribe(this.me);
  }

  constructor(private nzmessage: NzMessageService){}
}
