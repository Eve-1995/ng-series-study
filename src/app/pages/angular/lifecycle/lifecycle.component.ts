import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {
  currentLover = '迪丽热巴';
  currentName;
  record() {
    this.currentName = this.currentLover;
  }
  ngOnInit(): void {
    this.record();
  }
  dataSet = [
    {
      name: 'ngOnChanges()',
      value:
        '当 Angular（重新）设置数据绑定输入属性时响应。 该方法接受当前和上一属性值的 SimpleChanges 对象 当被绑定的输入属性的值发生变化时调用， 在Angular6以下的版本中,首次调用一定会发生在 ngOnInit() 之前。'
    },
    {
      name: 'ngOnInit()',
      value:
        '在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。 在第一轮 ngOnChanges() 完成之后调用，只调用一次。'
    },
    {
      name: 'ngDoCheck()',
      value: '在发生 Angular 无法或不愿意自己检测的变化时作出反应。 在每个 Angular 变更检测周期中调用，ngOnChanges() 和 ngOnInit() 之后。'
    },
    {
      name: 'ngAfterContentInit()',
      value: '当把内容投影进组件之后调用。 第一次 ngDoCheck() 之后调用，只调用一次。'
    },
    {
      name: 'ngAfterContentChecked()',
      value: '每次完成被投影组件内容的变更检测之后调用。 ngAfterContentInit() 和每次 ngDoCheck() 之后调用'
    },
    {
      name: 'ngAfterViewInit()',
      value: '初始化完组件视图及其子视图之后调用。 第一次 ngAfterContentChecked() 之后调用，只调用一次。'
    },
    {
      name: 'ngAfterViewChecked()',
      value: '每次做完组件视图和子视图的变更检测之后调用。 ngAfterViewInit() 和每次 ngAfterContentChecked() 之后调用。'
    },
    {
      name: 'ngOnDestroy()',
      value:
        '当 Angular 每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。 在 Angular 销毁指令/组件之前调用。'
    }
  ];
  code1 = `
    <h1>父组件</h1>
    <input nz-input [(ngModel)]="currentLover" name="currentLover" placeholder="请输入现任">
    <button (click)="record()" nz-button nzType="primary">更新</button>
    <emotion [name]="currentName"></emotion>
    `;
  code2 = `
    export class LifecycleComponent implements OnInit {
        currentLover = '迪丽热巴';
        currentName;
        record() {
            this.currentName = this.currentLover;
        }
        ngOnInit(): void {
            this.record();
        }
    }
    `;
  code3 = `
    <h1>子组件</h1>
    <ul>
        <li>初恋:&nbsp;&nbsp;<span>{{firstLover}}</span></li>
        <li>前任:&nbsp;&nbsp;<span>{{previousLover}}</span></li>
        <li>现任:&nbsp;&nbsp;<span>{{currentLover}}</span></li>
    </ul>
    `;
  code4 = `
    export class EmotionComponent implements OnChanges {
        @Input() name: string;
        firstLover;
        currentLover;
        previousLover;
        ngOnChanges(simpleChanges: SimpleChanges): void {
            if (simpleChanges['name'].firstChange) {
                this.firstLover = simpleChanges['name'].currentValue;
                this.currentLover = simpleChanges['name'].currentValue;
            } else {
                this.previousLover = simpleChanges['name'].previousValue;
                this.currentLover = simpleChanges['name'].currentValue;
            }
        }
    }    
    `;
  code6 = `
    import { OnInit } from '@angular/core';
    export class XXX implements OnInit {
        ngOnInit(simpleChanges: SimpleChanges): void {
           //do something
        }
    }    
    `;
}
