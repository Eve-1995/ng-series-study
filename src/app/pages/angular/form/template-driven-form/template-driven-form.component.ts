import { Component } from '@angular/core';
import { User } from './user';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  constructor(private messageService: NzMessageService) {}
  code1 = `
    import { FormsModule }   from '@angular/forms';
    @NgModule({
    imports: [
        FormsModule
    ]
    })
    export class AppModule { }
    `;
  code2 = `
    export class User {
        constructor(
            public userName: string,
            public password: string,
            public realName?: string
        ) { }
    }    
    `;
  user = new User();
  code3 = `
    <input nz-input [(ngModel)]="user.userName" name="userName" placeholder="请输入姓名">
    <input nz-input [(ngModel)]="user.password" name="password" placeholder="请输入密码">
    <input nz-input [(ngModel)]="user.realName" name="realName" placeholder="请输入真实姓名">
    <br/>
    注册信息为:{{user | json}}
    `;
  code4 = `
    import { User } from './user';
    export class TemplateDrivenFormComponent {
        user = new User();
    }
    `;
  tableData = [
    {
      state: '控件被访问过',
      true: 'ng-touched',
      false: 'ng-untouched'
    },
    {
      state: '控件的值变化了',
      true: 'ng-dirty',
      false: 'ng-pristine'
    },
    {
      state: '控件的值有效',
      true: 'ng-valid',
      false: 'ng-invalid'
    }
  ];
  model;
  code5 = `
    <form>
    <input nz-input required [(ngModel)]="model" name="model" placeholder="输入内容并观察输出结果" #inputElement>
        <br>控件当前的状态: {{inputElement.className}}
    </form>
    `;
  userName;
  code6 = `
    <form>
        <p>
            <span>touched = {{demo2.touched}}</span>
            <span>untouched = {{demo2.untouched}}</span>
            <span>dirty = {{demo2.dirty}}</span>
            <span>pristine = {{demo2.pristine}}</span>
            <span>valid = {{demo2.valid}}</span>
            <span>invalid = {{demo2.invalid}}</span>
        </p>
        <label for="userName">用户名:</label>
        <input nz-input required [(ngModel)]="userName" id="userName" name="userName" #demo2="ngModel">
        <div [hidden]="demo2.valid || demo2.pristine">
            用户名不能为空!
        </div>
    </form>
    `;
  code7 = `
    //当值被修改时
    .ng-dirty:not(form) {
        border-left: 5px solid #a94442;
    } 
    //当控件值合法时
    .ng-valid:not(form) {
        border-left: 5px solid #42A948;
    } 
    //当控件值为无效值且修改过
    .ng-invalid:not(form).ng-touched:not(form) {
        border-left: 5px solid #a94442;
    }
    /* 
    这里可能有人会好奇为什么被修改就直接是红色,这是因为如果不写这句话存在如下bug.
    因为需求是"在初始状态下一切正常",所以,不能单纯判断值是否有效,要配合touched进行判断,否则一开始就是红色.
    当用户第一次选中输入框时,输入值再撤销,其实控件touched状态是没有发生变更的,只有在失焦事件发生后才会变更.
    也就导致了在touched状态变更前,即使数据不合法,也不会产生红色边框.
    所以补了一个dirty状态,一旦值被动过,就直接给他加红色边框.
    */
    `;
  passwprd;
  code8 = `
    <form #demo4="ngForm" (ngSubmit)="onSubmit()">
        <p>
            <span>touched = {{demo3.touched}}</span>
            <span>untouched = {{demo3.untouched}}</span>
            <span>dirty = {{demo3.dirty}}</span>
            <span>pristine = {{demo3.pristine}}</span>
            <span>valid = {{demo3.valid}}</span>
            <span>invalid = {{demo3.invalid}}</span>
        </p>
        <label for="passwprd">密码:</label>
        <input nz-input required [(ngModel)]="passwprd" id="passwprd" name="passwprd" #demo3="ngModel">
        <br/><br/>
        <div class="button-group">
            <button (click)="demo4.reset()" nz-button nzType="danger">清空</button>
            <button type="submit" nz-button nzType="primary">提交</button>
        </div>
    </form>
    `;
  onSubmit() {
    this.messageService.success('您的密码为:' + this.passwprd);
  }
}
