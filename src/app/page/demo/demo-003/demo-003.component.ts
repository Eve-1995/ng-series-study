import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-demo-003',
  templateUrl: './demo-003.component.html'
})
export class Demo003Component {
  private subject$ = new Subject<void>();

  doSubscribe(): void {
    this.subject$.subscribe(() => this.nzmessage.success('收到数据啦'));
  }

  send(): void {
    this.subject$.next();
  }

  constructor(private nzmessage: NzMessageService) {}
}
