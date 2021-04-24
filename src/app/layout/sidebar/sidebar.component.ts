import { LocationStrategy, Location } from '@angular/common';
import { AfterContentInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

interface Menu {
  level: 1 | 2; // 第几层菜单, 只用于缩进左边距
  title: string;
  page?: string; // 需要跳转的url参数
  selected?: boolean;
  open?: boolean;
  children?: Menu[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterContentInit {
  menus: Menu[] = [
    {
      level: 1,
      title: '教程概述',
      page: '001'
    },
    {
      level: 1,
      title: 'RxJS',
      children: [
        {
          level: 2,
          title: '初识RxJS',
          page: '002'
        },
        {
          level: 2,
          title: '常用操作符',
          page: '003'
        }
      ]
    }
  ];

  changePage(page: string): void {
    this.appService.changePage$.next(page);
    this.updateParam(page);
  }

  /** 根据 url 自动选中、展开对应的菜单 */
  private updateMenuStatus(children: Menu[], parent?: Menu): void {
    const page: string = this.activatedRoute.snapshot.queryParams.page || '001';
    for (const menu of children) {
      menu.selected = menu.page === page;
      if (parent) {
        parent.open = menu.selected;
      }
      if (menu.selected) {
        break;
      }
      if (menu.children) {
        this.updateMenuStatus(menu.children, menu);
      }
    }
  }

  /** 更新路由参数, 但不跳转页面. 真正地跳转是由动态组件完成的 */
  private updateParam(page: string): void {
    const queryParams = { page };
    this.location.replaceState(this.router.createUrlTree([this.locationStrategy.path().split('?')[0]], { queryParams }).toString());
  }

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private locationStrategy: LocationStrategy,
    private appService: AppService
  ) {}

  ngAfterContentInit(): void {
    // Angular hook的问题, 如果不延时, 读不到 queryParams
    setTimeout(() => {
      this.updateMenuStatus(this.menus);
    });
  }
}
