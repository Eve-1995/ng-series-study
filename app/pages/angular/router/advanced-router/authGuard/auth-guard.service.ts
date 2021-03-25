import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class AuthGuardTrue implements CanActivate {
  canActivate() {
    return of(true).pipe(delay(1000)); //一秒后返回true
  }
}

@Injectable()
export class AuthGuardFalse implements CanActivate {
  canActivate() {
    return of(false).pipe(delay(1000)); //一秒后返回false
  }
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<null> {
  canDeactivate() {
    return confirm('确认离开吗?');
  }
}
