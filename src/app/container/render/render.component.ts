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
import { ActivatedRoute } from '@angular/router';
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

  private paramChange(page: string): void {
    this.index = page;
    this.generateComponent();
  }

  constructor(
    private componentFactoryResolve: ComponentFactoryResolver,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    const page: string = this.activatedRoute.snapshot.queryParams.page || '001';
    this.paramChange(page);
    this.appService.changePage$.pipe(takeUntil(this.unsubscribe$)).subscribe(v => this.paramChange(v));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
