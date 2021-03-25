import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkDownComponent } from './markdown.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MarkDownComponent],
  exports: [MarkDownComponent]
})
export class MarkDownModule {}
