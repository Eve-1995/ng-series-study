import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommunicationService {
  // 声明两个Subject并定义接收数据类型,在本案例中是一个对象
  private father = new Subject<{ drink; eat }>();
  private child = new Subject<{ drink; eat }>();
  // 将Subject转化为Observable
  father$ = this.father.asObservable();
  child$ = this.child.asObservable();
  /* 将变化的值,发送给订阅者 */
  fatherSend(value: { drink; eat }) {
    this.father.next(value);
  }
  childSend(value: { drink; eat }) {
    this.child.next(value);
  }
}
