import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class LoginService {
  login(userName: string, password: string): boolean {
    if (userName === 'admin' && password === '123456') {
      return true;
    }
    return false;
  }
}

@Injectable()
export class ComponentService {
  constructor(private nzMessageService: NzMessageService) {}
  value = 0;
  add() {
    this.value++;
    this.nzMessageService.info(this.value.toString());
  }
}

@Injectable()
export class RootService {
  constructor(private nzMessageService: NzMessageService) {}
  value = 0;
  add() {
    this.value++;
    this.nzMessageService.info(this.value.toString());
  }
}
