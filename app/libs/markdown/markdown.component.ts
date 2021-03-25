import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-md',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkDownComponent {
  @Input() type: 'section'|'h1'|'h2'|'h3'|'h4'|'h5';
}
