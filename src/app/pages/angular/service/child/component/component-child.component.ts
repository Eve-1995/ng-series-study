import { Component } from '@angular/core';
import { ComponentService } from '../../service/demo.service';

@Component({
  selector: 'component-child',
  templateUrl: './component-child.component.html',
  styleUrls: ['./component-child.component.scss'],
  providers: [ComponentService]
})
export class ComponentChildComponent {
  constructor(private componentService: ComponentService) {}
  addAndShow() {
    this.componentService.add();
  }
}
