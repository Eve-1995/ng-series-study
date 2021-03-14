import { Component, Input } from '@angular/core';
import { Anchor } from './content-fill.interface';

@Component({
  selector: 'app-content-fill',
  templateUrl: './content-fill.component.html',
  styleUrls: ['./content-fill.component.scss']
})
export class ContentFillComponent {
  @Input() anchor: Anchor[] = [];
  constructor() {
    setTimeout(() => {
      console.log(this.anchor, `this.anchor`);
    }, 3000);
  }
}
