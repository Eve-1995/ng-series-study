import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { RxjsService } from '../rxjs-service';
@Component({
  templateUrl: './init-rxjs.component.html',
  styleUrls: ['init-rxjs.component.scss']
})
export class InitRxjsComponent {
  emit(): void {
    this.rxjsService.Subject$.next();
  }

  constructor(private rxjsService: RxjsService, public appService: AppService) {}
}
