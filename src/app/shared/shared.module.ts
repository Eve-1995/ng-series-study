import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// region: third libs
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
// 自定义的全局组件
import { CodemirrorComponent } from './codemirror/codemirror.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

// 先把全部的zorro都引进来, 能跑起来再说
const zorroModules = [
  NzButtonModule,
  NzIconModule,
  NzGridModule,
  NzDropDownModule,
  NzMenuModule,
  NzPaginationModule,
  NzStepsModule,
  NzAutocompleteModule,
  NzCascaderModule,
  NzCheckboxModule,
  NzDatePickerModule,
  NzFormModule,
  NzInputModule,
  NzInputNumberModule,
  NzMentionModule,
  NzRadioModule,
  NzSelectModule,
  NzSwitchModule,
  NzTimePickerModule,
  NzAvatarModule,
  NzBadgeModule,
  NzCalendarModule,
  NzCardModule,
  NzCarouselModule,
  NzCollapseModule,
  NzEmptyModule,
  NzListModule,
  NzPopoverModule,
  NzTableModule,
  NzTabsModule,
  NzTagModule,
  NzTimelineModule,
  NzToolTipModule,
  NzTreeModule,
  NzAlertModule,
  NzDrawerModule,
  NzMessageModule,
  NzModalModule,
  NzNotificationModule,
  NzProgressModule,
  NzSkeletonModule,
  NzSpinModule,
  NzDividerModule,
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
