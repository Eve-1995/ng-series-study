import { Component } from '@angular/core';
@Component({
  templateUrl: './common-question.component.html',
  styleUrls: ['common-question.component.scss']
})
export class CommonQuestionComponent {
  code1 = `
  location.hash
  `;
  code2 = `
  @NgModule({
      imports: [RouterModule.forRoot(
        routes,
        {
          useHash: false//关闭哈希选项
        }
      )],
      exports: [RouterModule],
    })
  `;
  code3 = `
  "class-name": false
  `;
  code4 = `
  import { NgZorroAntdModule } from 'ng-zorro-antd';
  @NgModule({
    imports: [
      NgZorroAntdModule
    ]
  })
  export class AppModule {}
  `;
  code5 = `
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ReactiveFormsModule, FormsModule } from '@angular/forms';
  import { RouterModule } from '@angular/router';
  // region: third libs
  import { NgZorroAntdModule } from 'ng-zorro-antd';

  const THIRDMODULES = [
    NgZorroAntdModule
  ];
  // endregion

  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      ReactiveFormsModule,
      // third libs
      ...THIRDMODULES,
    ],
    declarations: [
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      // third libs
      ...THIRDMODULES
    ],
  })
  export class SharedModule {}
  `;
  code6 = `
  import { SharedModule } from '../../shared/shared.module';//引入共享模块
  @NgModule({
      imports: [
          SharedModule,
      ]
  })
  export class XxxModule { }
  `;
  code7 = `
  import { CustomComponent } from '../CustomComponent';

  const CUSTOM_COMPONENT = [
    CustomComponent
  ];

  @NgModule({
    declarations: [
      CUSTOM_COMPONENT
    ],
    exports: [
      CUSTOM_COMPONENT
    ],
  })
  export class SharedModule {}
  `;
  code8 = `
  import { SharedModule } from '../../shared/shared.module';//引入共享模块
  @NgModule({
      imports: [
          SharedModule,
      ]
  })
  export class XxxModule { }
  `;
  code9 = `
  import { XxxService } from './xxx.service';

  @Component({
      providers: [XxxService]
  })
  `;
  code10 = `
  import { XxxService } from './xxx.service';

  @NgModule({
      providers:[
          XxxService
      ]
  })
  `;
}
