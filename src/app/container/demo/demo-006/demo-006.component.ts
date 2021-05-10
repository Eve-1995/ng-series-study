// TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-006', // 选择器, 当需要调用这个组件的时候可以在调用的模板中写<app-demo-006></app-demo-006>
  templateUrl: './demo-006.component.html', // 指定模板, 使用哪个HTML文件
  styleUrls: ['./demo-006.component.scss'] // 使用样式表, 注意这里是数组, 所以可以使用多个样式表
})
export class Demo006Component {
  value = 'Input something?';
}
