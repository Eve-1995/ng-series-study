import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// region: third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { CodemirrorModule } from 'ng2-codemirror';
// 自定义的全局组件
import { CodemirrorComponent } from './codemirror/codemirror.component';

const THIRDMODULES = [
  NgZorroAntdModule,
  CodemirrorModule,
];
const CUSTOM_COMPONENT = [
  CodemirrorComponent
];
// endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // third libs
    ...THIRDMODULES
  ],
  declarations: [
    CUSTOM_COMPONENT
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // third libs
    ...THIRDMODULES,
    CUSTOM_COMPONENT
  ],
})
export class SharedModule {}
