import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-demo-005',
  templateUrl: './demo-005.component.html'
})
export class Demo005Component implements OnInit {
  private unsubscribe$ = new Subject();

  loading = false;
  formControl = new FormControl();

  ngOnInit(): void {
    // valueChanges 是 Observable 类型
    this.formControl.valueChanges.pipe(debounceTime(500), takeUntil(this.unsubscribe$)).subscribe(() => {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    });
  }
}
