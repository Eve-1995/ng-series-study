import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-007',
  templateUrl: './demo-007.component.html'
})
export class Demo007Component {
  value = 1;

  add(): void {
    this.value++;
  }
}
