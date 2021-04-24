import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { getComponent } from './util';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RenderComponent implements OnInit, OnDestroy {
  /** 文章序号 */
  private index: string;
  private unsubscribe$ = new Subject<void>();

  @ViewChild('componentRef', { read: ViewContainerRef }) componentRef: ViewContainerRef;

  private generateComponent(): void {
    this.cdr.detectChanges();
    const { component } = getComponent(this.index);
    const componentFactory = this.componentFactoryResolve.resolveComponentFactory(component);
    this.componentRef.clear();
    const componentRef = this.componentRef.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }

  constructor(private componentFactoryResolve: ComponentFactoryResolver, private cdr: ChangeDetectorRef, private appService: AppService) {}

  ngOnInit(): void {
    this.appService.changePage$.pipe(takeUntil(this.unsubscribe$)).subscribe(v => {
      this.index = v;
      this.generateComponent();
    });
    this.generateComponent();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
