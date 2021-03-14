import { Component } from '@angular/core';
import { RootService, LoginService, ComponentService } from './service/demo.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  providers: [LoginService, ComponentService]
})
export class ServiceComponent {
  constructor(
    private rootService: RootService,
    private componentService: ComponentService,
    private loginService: LoginService,
    private nzMessageService: NzMessageService
  ) {}
  addAndShowRoot() {
    this.rootService.add();
  }
  addAndShowComponent() {
    this.componentService.add();
  }
  login(userName, password) {
    if (this.loginService.login(userName, password)) {
      this.nzMessageService.info('登录成功!');
    } else {
      this.nzMessageService.error('登录失败!');
    }
  }
  code4 = `
    import { XxxService } from './xxx.service';
    
    @Component({
        providers: [XxxService]
    })
    `;
  code5 = `
    import { XxxService } from './xxx.service';
    
    @NgModule({
        providers:[
            XxxService
        ]
    })
    `;
  code1 = `
    import { Injectable } from '@angular/core';

    @Injectable()
    export class LoginService {
        login(userName: string, password: string): boolean {
            if (userName === 'admin' && password === '123456') {
                return true;
            }
            return false;
        }
    }
    `;
  code2 = `
    <input nz-input #userName name="userName" placeholder="用户名,默认admin">
    <input nz-input #password name="password" placeholder="密码,默认123456">
    <button (click)="login(userName.value,password.value)" nz-button nzType="primary">登录</button>
    `;
  code3 = `
    import { Component } from '@angular/core';
    import { LoginService } from './service/demo.service';
    import { NzMessageService } from 'ng-zorro-antd/message';

    @Component({
        templateUrl: './service.component.html',
        styleUrls: ['./service.component.scss'],
        providers: [LoginService]
    })
    export class ServiceComponent {
        constructor(
            private loginService: LoginService
        ) { }
        login(userName, password) {
            if (this.loginService.login(userName, password)) {
                this.nzMessageService.info('登录成功!');
            } else {
                this.nzMessageService.error('登录失败!');
            }
        }
    }
    `;
  code6 = `
    import { Injectable } from '@angular/core';
    import { NzMessageService } from 'ng-zorro-antd/message';

    @Injectable()
    export class ComponentService {
        constructor(private nzMessageService: NzMessageService) { }
        value = 0;
        add() {
            this.value++;
            this.nzMessageService.info(this.value.toString());
        }
    }
    `;
  code7 = `
    <h1>父组件</h1>
    <button (click)="addAndShowComponent()" nz-button nzType="primary">自增且显示</button>
    <component-child></component-child>
    `;
  code8 = `
    import { Component } from '@angular/core';
    import { ComponentService } from './service/demo.service';

    @Component({
        templateUrl: './service.component.html',
        styleUrls: ['./service.component.scss'],
        providers: [ComponentService]
    })
    export class ServiceComponent {
        constructor(
            private componentService: ComponentService
        ) { }
        addAndShowComponent() {
            this.componentService.add();
        }
    }
    `;
  code9 = `
    <h1>子组件</h1>
    <span>
        <button (click)="addAndShow()" nz-button nzType="primary">自增且显示</button>
    </span>
    `;
  code10 = `
    import { Component } from '@angular/core';
    import { ComponentService } from '../../service/demo.service';

    @Component({
        selector: 'component-child',
        templateUrl: './component-child.component.html',
        styleUrls: ['./component-child.component.scss'],
        providers: [ComponentService]
    })
    export class ComponentChildComponent {
        constructor(private componentService: ComponentService) { }
        addAndShow() {
            this.componentService.add();
        }
    }
    `;
  code11 = `
    import { Injectable } from '@angular/core';
    import { NzMessageService } from 'ng-zorro-antd/message';

    @Injectable()
    export class RootService {
        constructor(private nzMessageService: NzMessageService) { }
        value = 0;
        add() {
            this.value++;
            this.nzMessageService.info(this.value.toString());
        }
    }
    `;
  code12 = `
    <h1>父组件</h1>
    <button (click)="addAndShowRoot()" nz-button nzType="primary">自增且显示</button>
    <service-child></service-child>
    `;
  code13 = `
    import { Component } from '@angular/core';
    import { RootService } from './service/demo.service';

    @Component({
        templateUrl: './service.component.html',
        styleUrls: ['./service.component.scss']
    })
    export class ServiceComponent {
        constructor(
            private rootService: RootService
        ) { }
        addAndShowRoot() {
            this.rootService.add();
        }
    }
    `;
  code14 = `
    <h1>子组件</h1>
    <span>
        <button (click)="addAndShow()" nz-button nzType="primary">自增且显示</button>
    </span>
    `;
  code15 = `
    import { Component } from '@angular/core';
    import { RootService } from '../../service/demo.service';

    @Component({
        selector: 'service-child',
        templateUrl: './service-child.component.html',
        styleUrls: ['./service-child.component.scss']
    })
    export class ServiceChildComponent {
        constructor(private rootService: RootService) { }
        addAndShow() {
            this.rootService.add();
        }
    }
    `;
  code16 = `
    import { RootService } from './service/service/demo.service';

    @NgModule({
        providers:[
            RootService
        ]
    })
    export class AngularModule { }//这是我的模块名
    `;
}
