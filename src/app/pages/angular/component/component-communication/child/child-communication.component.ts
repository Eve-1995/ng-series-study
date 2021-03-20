import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommunicationService } from '../service/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'child-communication',
  templateUrl: './child-communication.component.html',
  styleUrls: ['./child-communication.component.scss']
})
export class ChildCommunicationComponent implements OnDestroy {
  subscription: Subscription;
  constructor(private messageService: NzMessageService, private communicationService: CommunicationService) {
    this.subscription = communicationService.father$.subscribe(value => {
      this.drink = value.drink;
      this.eat = value.eat;
    });
  }
  @Input() index: number;
  @Input() childValue1: string;
  childValue2;
  childValue3;
  childValue4;
  childFunction2() {
    this.messageService.info(this.childValue2);
  }
  childFunction3() {
    this.messageService.info(this.childValue3);
  }
  @Output() event = new EventEmitter<any>();
  name = 'Eve';
  bornYear = '1995';
  childFunction4() {
    this.event.emit({
      name: this.name,
      bornYear: this.bornYear
    });
  }
  drink;
  eat;
  transferDataByService() {
    this.communicationService.childSend({ drink: this.drink, eat: this.eat });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
