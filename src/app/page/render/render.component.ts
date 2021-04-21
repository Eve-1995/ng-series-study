import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { getComponent } from './util';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RenderComponent implements OnInit {
  /** 文章序号 */
  private index: string;
  @ViewChild('componentRef', { read: ViewContainerRef }) componentRef: ViewContainerRef;

  private generateComponent(): void {
    this.cdr.detectChanges();
    const { component } = getComponent(this.index);
    const componentFactory = this.componentFactoryResolve.resolveComponentFactory(component);
    this.componentRef.clear();
    const componentRef = this.componentRef.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolve: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.index = params.index;
      this.generateComponent();
    });
  }
}
