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
import { getComponent } from './render-config';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RenderComponent implements OnInit {
  @ViewChild('componentRef', { read: ViewContainerRef }) componentRef: ViewContainerRef;

  private generateComponent(index: string): void {
    this.cdr.detectChanges();
    const { component } = getComponent(index);
    const componentFactory = this.componentFactoryResolve.resolveComponentFactory(component);
    this.componentRef.clear();
    const componentRef = this.componentRef.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }

  constructor(
    private componentFactoryResolve: ComponentFactoryResolver,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const index = params.index;
      this.generateComponent(index);
    });
  }
}
