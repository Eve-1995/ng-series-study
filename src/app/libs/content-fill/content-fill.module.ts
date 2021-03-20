import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { ContentFillComponent } from './content-fill.component';

@NgModule({
  imports: [CommonModule, NzAnchorModule],
  declarations: [ContentFillComponent],
  exports: [ContentFillComponent]
})
export class ContentFillModule {}
