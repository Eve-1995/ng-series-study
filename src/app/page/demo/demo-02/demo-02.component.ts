import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-demo-02',
  templateUrl: './demo-02.component.html'
})
export class Demo02Component {
  receiveNum = 0; // 已经收到的报纸数量

  doSubscribe(): void {
    this.postman.subscribe(this.me);
  }

  private me: Observer<void> = {
    next: () => this.receiveNum++,
    error: () => {},
    complete: () => this.nzmessage.success('投递完成')
  };

  private postman: Observable<unknown> = new Observable(observer => {
    setTimeout(() => {
      observer.next(); // 第一份报纸
      observer.next(); // 第二份报纸
      observer.next(); // 第三份报纸
      observer.complete();
      observer.next(); // 第四份报纸(因为刚刚执行过complete, 所以实际上并没有投递成功)
    }, 500);
  });

  constructor(private nzmessage: NzMessageService){}
}
