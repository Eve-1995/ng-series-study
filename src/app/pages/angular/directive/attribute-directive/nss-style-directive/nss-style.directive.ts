import { Directive, ElementRef, Input, DoCheck, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nssStyle]'
})
export class NssStyleDirective implements DoCheck {
  @Input('nssColor') color: string;
  @Input('nssWeight') weight: string;
  @Input('nssSize') size: number;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngDoCheck() {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'color', this.color);
    this.renderer.setAttribute(this.elementRef.nativeElement, 'font-weight', this.weight);
    this.renderer.setAttribute(this.elementRef.nativeElement, 'font-size', this.size + 'px');
  }
}
