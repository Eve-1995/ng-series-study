import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';

@Component({
  templateUrl: './conventional-usage.component.html',
  styleUrls: ['./conventional-usage.component.scss']
})
export class ConventionalUsageComponent {
  anchor: Anchor[] = [
    {
      href: '#resume',
      title: '概述'
    },
    {
      href: '#default-code-analyze',
      title: '组件三要素'
    },
    {
      href: '#interpolation',
      title: '插值表达式'
    },
    {
      href: '#bind',
      title: '绑定机制'
    },
    {
      href: '#optional-chain',
      title: '可选链'
    }
  ];

  constructor(private messageService: NzMessageService) {}
  templateUrlCode = `
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    `;
  insertCodeHtml = `
    <div id="user-name">
        <!-- 在这里显示用户名 -->
    </div>
    `;
  insertCodeJs = `
    var userName = 'Eve';
    $('#user-name').text(userName)
    `;
  userName = 'Eve';
  insertCodeHtmlInNg = `
    <div id="user-name">
        {{userName}}
    </div>
    `;
  insertCodeTs = `
    userName = 'Eve';
    `;
  byString = '我是字符串';
  byObject = { centence: '我是对象的值' };
  byArray = ['我是数组的0号元素'];
  showDataCodeHtml = `
    <p>{{byString}}</p>
    <p>{{byObject.centence}}</p>
    <p>{{byArray[0]}}</p>
    `;
  showDataCodeTs = `
    byString = '我是字符串';
    byObject = { centence: '我是对象的值' };
    byArray = ['我是数组的0号元素'];
    `;
  classCodeHtml = `
    <div class="{{className}}">
        <p>犬夜叉是真爱!</p>
        <p>没有之一!</p>
    </div>
    `;
  classCodeCss = `
    .color{
        color: red;
    }
    `;
  classCodeTs = `
    className = 'color';
    `;
  className = 'color';
  centence = '风铃响,故人归';
  bindCodeHtml = `
<div>
  <p>案例1:使用模版引用变量(脱离数据源)</p>
  <input style="width: 125px" nz-input #age placeholder="请输入你的年纪" />
  <button (click)="showMsg(age.value)" nz-button nzType="primary">弹出模板引用变量的内容</button>
</div>
<div>
  <p>案例2:使用固定字符串(从视图到数据源的单向)</p>
  <button (click)="showMsg('我是写在模板当中的内容')" nz-button nzType="primary">弹出默认的内容</button>
</div>
<div>
  <p>案例3:使用固定字符串(从数据源到视图的单向)</p>
  <span [ngClass]="className">
    <!-- 这里的ngClass等同于 class="{{className}}" -->
    我是红色的, 但是我的样式名不是写死的, 而是ts中定义好的
  </span>
</div>
<div>
  <p>案例4:既有单向绑定又有双向绑定</p>
  <input style="width: 125px" nz-input [(ngModel)]="centence"/>
  <button (click)="showMsg(centence)" nz-button nzType="primary">弹出双向绑定的内容</button>
</div>
    `;
  bindCodeTs = `
centence = '风铃响,故人归';
showMsg(value: string) {
    this.messageService.info(value);
}
    `;
  user = {
    name: '前夕',
    house: null
  };
  safeCodeHtml = `
我是{{user.name}}, 我的房子所在地为{{user.house?.location}}
    `;
  safeCodeTs = `
user = {
  name: '前夕',
  house: null
};
    `;
  sentence = '这个世界其实是公平的';
  code1 = `
<!--不包含内容的子组件-->
<child></child>

<!--包含内容的子组件-->
<child>
    <p>内容</p>
</child>
    `;
  code2 = `
<h1>父组件</h1>
<input nz-input [(ngModel)]="sentence" name="sentence" class="sentence">
<stomach>
    <div style="margin-bottom: 14px;">{{sentence}}</div>
    <p>所谓的不公,只是不符合人类社会法则</p>
    <span class="className">却符合因果关系</span>
</stomach>
    `;
  code3 = `
<h1>子组件</h1>
<ng-content></ng-content>
<ng-content select="p"></ng-content>
<ng-content select=".className"></ng-content>
    `;
  code4 = `
今天想吃点啥?
<ng-template>
    吮指原味鸡肿么样?.
</ng-template>
    `;
  code5 = `
今天想吃点啥?
<ng-template [ngIf]="true">
    吮指原味鸡肿么样?.
</ng-template>
    `;
  code6 = `
    <ng-container>
        <p>轻流招聘啦~详情请戳https://github.com/Eve-Sama</p>
    </ng-container>
    `;
  showMsg(value: any) {
    this.messageService.info(value);
  }
}
