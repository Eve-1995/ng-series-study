import { Component } from '@angular/core';
import { RootService } from '../../service/demo.service';

@Component({
  selector: 'service-child',
  templateUrl: './service-child.component.html',
  styleUrls: ['./service-child.component.scss']
})
export class ServiceChildComponent {
  constructor(private rootService: RootService) {}
  addAndShow() {
    this.rootService.add();
  }
}
