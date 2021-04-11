import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarkdownComponent {
  @Input() src: string;
}
