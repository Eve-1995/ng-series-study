import { Component, ViewChild, OnDestroy } from '@angular/core';
import { ChildCommunicationComponent } from './child/child-communication.component';
import { CommunicationService } from './service/communication.service';
import { Subscription } from 'rxjs';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';

@Component({
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.scss'],
  providers: [CommunicationService]
})
export class ComponentCommunicationComponent implements OnDestroy {
  subscription: Subscription;

  anchor: Anchor[] = [
    {
      href: '#resume',
      title: '概述'
    },
    {
      href: '#father-child-component',
      title: '父子组件'
    },
    {
      href: '#father-transfer-to-child',
      title: '父组件传值给子组件'
    },
    {
      href: '#father-call-function-child',
      title: '父组件调用子组件方法',
      children: [
        {
          href: '#class-call',
          title: '类调用'
        },
        {
          href: '#instantiation-call',
          title: '实例调用'
        }
      ]
    },
    {
      href: '#child-transfer-to-father',
      title: '子组件传值给父组件'
    },
    {
      href: '#service',
      title: '通过服务进行通讯'
    }
  ];

  constructor(private communicationService: CommunicationService) {
    this.subscription = communicationService.child$.subscribe(value => {
      this.drink = value.drink;
      this.eat = value.eat;
    });
  }
  faterCodeHtml = `
    <h1>我是父组件</h1>
    <input nz-input class="input" placeholder="父组件的输入框">
    <child-communication></child-communication>
    `;
  childCodeHtml = `
    <div class="child">
        <h1>我是子组件</h1>
        <input nz-input class="input" placeholder="子组件的输入框">
    </div>
    `;
  childCodeTs = `
    import { Component } from '@angular/core';

    @Component({
        selector: 'child-communication',
        templateUrl: './child-communication.component.html',
        styleUrls: ['./child-communication.component.scss']
    })
    
    export class ChildCommunicationComponent {
    }
    `;
  fatherValue1;
  childValue1;
  transferData() {
    this.childValue1 = this.fatherValue1;
  }
  code1 = `
    <h1>我是父组件</h1>
    <input nz-input class="input" [(ngModel)]="fatherValue1" placeholder="父组件的输入框">
    <button (click)="transferData()" nz-button nzType="primary">传值给子组件</button>
    <child-communication [childValue1]="childValue1"></child-communication>
    `;
  code2 = `
    fatherValue1;
    childValue1;
    transferData() {
        this.childValue1 = this.fatherValue1;
    }
    `;
  code3 = `
    <h1>我是子组件</h1>
    <input nz-input class="input" [(ngModel)]="childValue1" name="childValue1" placeholder="子组件的输入框">
    `;
  code4 = `
    @Input() childValue1: string;
    `;
  @ViewChild(ChildCommunicationComponent) private childComponent: ChildCommunicationComponent;
  callChildFunction2() {
    this.childComponent.childFunction2();
  }
  code5 = `
    <h1>我是父组件</h1>
    <button (click)="callChildFunction2()" nz-button nzType="primary">调用子组件方法</button>
    <child-communication></child-communication>
    `;
  code6 = `
    @ViewChild(ChildCommunicationComponent) private childComponent: ChildCommunicationComponent;
    callChildFunction2() {
        this.childComponent.childFunction2();
    }
    `;
  code7 = `
    <h1>我是子组件</h1>
    <input nz-input class="input" [(ngModel)]="childValue2" name="childValue2" placeholder="子组件的输入框">
    <button (click)="childFunction2()" nz-button nzType="primary">调用方法</button>
    `;
  code8 = `
    childValue2;
    childFunction2() {
        this.messageService.info(this.childValue2);
    }
    `;
  code9 = `
    <h1>我是父组件</h1>
    <button (click)="callChildFunction3()" nz-button nzType="primary">调用子组件方法</button>
    <child-communication #child></child-communication>
    `;
  code10 = `
    @ViewChild('child') private childComponent2: ChildCommunicationComponent;
    callChildFunction3() {
        this.childComponent2.childFunction3();
    }
    `;
  code11 = `
    <h1>我是子组件</h1>
    <input nz-input class="input" [(ngModel)]="childValue3" name="childValue3" placeholder="子组件的输入框">
    <button (click)="childFunction3()" nz-button nzType="primary">调用方法</button>
    `;
  code12 = `
    childValue3;
    childFunction3() {
        this.messageService.info(this.childValue3);
    }
    `;
  @ViewChild('child') private childComponent2: ChildCommunicationComponent;
  callChildFunction3() {
    this.childComponent2.childFunction3();
  }
  name;
  bornYear;
  showInfo($event) {
    this.name = $event.name;
    this.bornYear = $event.bornYear;
  }
  code13 = `
    <h1>我是父组件</h1>
    <input nz-input class="input" [(ngModel)]="name" placeholder="姓名">
    <input nz-input class="input" [(ngModel)]="bornYear" placeholder="出生年月">
    <child-communication (event)="showInfo($event)"></child-communication>
    `;
  code14 = `
    name;
    bornYear;
    showInfo($event) {
        this.name = $event.name;
        this.bornYear = $event.bornYear;
    }
    `;
  code15 = `
    <h1>我是子组件</h1>
    <input nz-input class="input" [(ngModel)]="name" name="name" placeholder="姓名">
    <input nz-input class="input" [(ngModel)]="bornYear" name="bornYear" placeholder="出生年月">
    <button (click)="childFunction4()" nz-button nzType="primary">传值给父组件</button>  
    `;
  code16 = `
    @Output() event = new EventEmitter<any>();
    name = 'Eve';
    bornYear = '1995';
    childFunction4() {
        this.event.emit(
            {
                name: this.name,
                bornYear: this.bornYear
            }
        );
    }
    `;
  drink = '奶茶';
  eat = '泡芙';
  transferDataByService() {
    this.communicationService.fatherSend({ drink: this.drink, eat: this.eat });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  code17 = `
    import { Injectable } from '@angular/core';
    import { Subject } from 'rxjs';

    @Injectable()
    export class CommunicationService {
        // 声明两个Subject并定义接收数据类型,在本案例中是一个对象
        private father = new Subject<{ drink, eat }>();
        private child = new Subject<{ drink, eat }>();
        // 将Subject转化为Observable
        father$ = this.father.asObservable();
        child$ = this.child.asObservable();
        /* 将变化的值,发送给订阅者 */
        fatherSend(value: { drink, eat }) {
            this.father.next(value);
        }
        childSend(value: { drink, eat }) {
            this.child.next(value);
        }
    }
    `;
  code18 = `
    <h1>父组件</h1>
    <input nz-input class="input" [(ngModel)]="drink" name="drink" placeholder="最爱喝的饮料">
    <input nz-input class="input" [(ngModel)]="eat" name="eat" placeholder="最爱吃的甜点">
    <button (click)="transferDataByService()" nz-button nzType="primary">传值给子组件</button>
    <child-communication></child-communication>
    `;
  code19 = `
    import { CommunicationService } from './service/communication.service';
    import { Subscription } from 'rxjs';

    @Component({
        templateUrl: './component-communication.component.html',
        styleUrls: ['./component-communication.component.scss'],
        providers: [CommunicationService]
    })
    export class ComponentCommunicationComponent implements OnDestroy {
        subscription: Subscription;
        constructor(
            private communicationService: CommunicationService
        ) {
            this.subscription = communicationService.child$.subscribe(value => {
                this.drink = value.drink;
                this.eat = value.eat;
            });
        }
        drink = '奶茶';
        eat = '泡芙';
        transferDataByService() {
            this.communicationService.fatherSend({ drink: this.drink, eat: this.eat });
        }
        ngOnDestroy() {
            this.subscription.unsubscribe();
        }
    }
    `;
  code20 = `
    <h1>子组件</h1>
    <input nz-input class="input" [(ngModel)]="drink" name="drink" placeholder="最爱喝的饮料">
    <input nz-input class="input" [(ngModel)]="eat" name="eat" placeholder="最爱吃的甜点">
    <button (click)="transferDataByService()" nz-button nzType="primary">传值给父组件</button>
    `;
  code21 = `
    import { Subscription } from 'rxjs';

    @Component({
        selector: 'child-communication',
        templateUrl: './child-communication.component.html',
        styleUrls: ['./child-communication.component.scss']
    })
    export class ChildCommunicationComponent implements OnDestroy {
        subscription: Subscription;
        constructor(private communicationService: CommunicationService) {
            this.subscription = communicationService.father$.subscribe(value => {
                this.drink = value.drink;
                this.eat = value.eat;
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
    `;
}
