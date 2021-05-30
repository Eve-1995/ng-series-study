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
      title: 'Angular',
      children: [
        {
          level: 2,
          title: '基操集锦★',
          page: '006'
        }
        // {
        //   level: 2,
        //   title: '指令',
        //   page: '007'
        // },
        // {
        //   level: 2,
        //   title: '管道',
        //   page: '008'
        // },
        // {
        //   level: 2,
        //   title: '生命周期',
        //   page: '009'
        // }
      ]
    },
    {
      level: 1,
      title: 'TypeScript',
      children: [
        {
          level: 2,
          title: '基本概念★',
          page: '004'
        },
        {
          level: 2,
          title: '深入探讨',
          page: '005'
        }
      ]
    },
    {
      level: 1,
      title: 'RxJS',
      children: [
        {
          level: 2,
          title: '基本概念★',
          page: '002'
        },
        {
          level: 2,
          title: '常用操作符★',
          page: '003'
        }
      ]
    }
  ];

  changePage(index: string): void {
    this.router.navigate(['/render', index]);
  }

  /** 根据 url 自动选中、展开对应的菜单 */
  private updateMenuStatus(children: Menu[], parent?: Menu): void {
    const pageIndex: string = this.activatedRoute.snapshot.firstChild.params.index;
    for (const menu of children) {
      menu.selected = menu.page === pageIndex;
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

  constructor(
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
