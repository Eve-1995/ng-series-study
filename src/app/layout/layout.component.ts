import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less', './theme.less'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent {
  @ViewChild('drawer') drawer: ElementRef;
  sidebarIsHide = true;//控制侧边栏隐藏按钮样式
  openedChange($event) {
    this.sidebarIsHide = $event;
  }
  mode = 'side';
  hasBackdrop = false;
  constructor(router: Router, breakpointObserver: BreakpointObserver) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0);
      }
    });
    breakpointObserver.observe([
      '(max-width: 599px)',
      '(min-width:600px)'
    ]).subscribe(result => {
      if (result.matches) {
        const ow = window.innerWidth;
        if (ow <= 599) {
          this.hasBackdrop = true;
          this.mode = 'over';
        } else {
          this.hasBackdrop = false;
          this.mode = 'side';
        }
      }
    });
  }
}
