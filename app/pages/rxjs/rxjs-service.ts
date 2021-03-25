import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RxjsService {
  Subject$ = new Subject();
}
