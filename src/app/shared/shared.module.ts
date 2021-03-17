import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// region: third libs
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
// 自定义的全局组件
import { CodemirrorComponent } from './codemirror/codemirror.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

// 先把全部的zorro都引进来, 能跑起来再说
const zorroModules = [
  NzButtonModule,
  NzMenuModule,
  NzCheckboxModule,
  NzInputModule,
  NzRadioModule,
  NzSelectModule,
  NzCardModule,
  NzCollapseModule,
  NzTableModule,
  NzTabsModule,
  NzTagModule,
  NzAlertModule,
  NzDrawerModule,
  NzMessageModule,
  NzModalModule,
  NzAnchorModule,
  NzLayoutModule
];

const THIRDMODULES = [...zorroModules, HighlightModule];
const CUSTOM_COMPONENT = [CodemirrorComponent];
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
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        // fullLibraryLoader: () => import('highlight.js'),
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        lineNumbers: true, // 无效, 暂时先不探究了.
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ],
  declarations: [CUSTOM_COMPONENT],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // third libs
    ...THIRDMODULES,
    CUSTOM_COMPONENT
  ]
})
export class SharedModule {}
