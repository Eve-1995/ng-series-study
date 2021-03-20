import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[nssMilkTeaType]'
})
export class NssMilkTeaDirective {
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
  @Input('nssMilkTeaType') set type(type: string) {
    if (type === 'oreo') {
      this.viewContainer.clear(); //清除所有内嵌视图
      this.viewContainer.createEmbeddedView(this.templateRef); //创建内嵌视图
    } else if (type === 'redBean') {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (type === 'matcha') {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
