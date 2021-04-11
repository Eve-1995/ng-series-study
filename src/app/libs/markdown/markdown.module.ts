import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { MarkdownComponent } from './markdown.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE
    })
  ],
  declarations: [MarkdownComponent],
  exports: [MarkdownComponent]
})
export class AppMarkdownModule {}
