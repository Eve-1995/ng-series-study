import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-01',
  template: ` <p>app-demo-01 - {{ name }}</p>`
})
export class Demo01Component {
  name = '前夕';
}
