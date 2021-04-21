import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-demo-03',
  templateUrl: './demo-03.component.html'
})
export class Demo03Component {
  private subject$ = new Subject<void>();

  doSubscribe(): void {
    this.subject$.subscribe(() => this.nzmessage.success('收到数据啦'));
  }

  send(): void {
    this.subject$.next();
  }

  constructor(private nzmessage: NzMessageService) {}
}
