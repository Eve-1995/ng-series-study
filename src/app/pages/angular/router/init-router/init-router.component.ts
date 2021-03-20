import { Component } from '@angular/core';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';

@Component({
  templateUrl: './init-router.component.html',
  styleUrls: ['./init-router.component.scss']
})
export class InitRouterComponent {
  anchor: Anchor[] = [
    {
      href: '#resume',
      title: '概述'
    },
    {
      href: '#why-router',
      title: '为什么需要路由'
    },
    {
      href: '#import-router',
      title: '导入路由模块'
    },
    {
      href: '#router-outlet',
      title: 'router-outlet'
    },
    {
      href: '#routerLink',
      title: 'routerLink'
    },
    {
      href: '#ActivatedRoute',
      title: '激活的路由'
    },
    {
      href: '#router-event',
      title: '路由事件'
    }
  ];

  // <nz-anchor class="anchor" nzOffsetTop="64">
  // <nz-link nzHref="#resume" nzTitle="概述"></nz-link>
  // <nz-link nzHref="#why-router" nzTitle="为什么需要路由"></nz-link>
  // <nz-link nzHref="#import-router" nzTitle="导入路由模块"></nz-link>
  // <nz-link nzHref="#router-outlet" nzTitle="router-outlet"></nz-link>
  // <nz-link nzHref="#routerLink" nzTitle="routerLink"></nz-link>
  // <nz-link nzHref="#ActivatedRoute" nzTitle="激活的路由"></nz-link>
  // <nz-link nzHref="#router-event" nzTitle="路由事件"></nz-link>
  // </nz-anchor>

  code1 = `
    import { RouterModule } from '@angular/router';
    @NgModule({
    imports: [
        RouterModule
    })
    export class AppModule { }
    `;
  code2 = `
    <router-outlet></router-outlet>
    `;
  code3 = `
    <a href="../project/author">关于作者</a>
    `;
  code4 = `
    <a routerLink="/project/author">关于作者</a>
    `;
  tableData1 = [
    {
      key: 'url',
      value: '路由路径的 Observable 对象，是一个由路由路径中的各个部分组成的字符串数组'
    },
    {
      key: 'data',
      value: '一个 Observable，其中包含提供给路由的 data 对象。也包含由解析守卫（resolve guard）解析而来的值'
    },
    {
      key: 'paramMap',
      value: '一个 Observable，其中包含一个由当前路由的必要参数和可选参数组成的map对象。用这个 map 可以获取来自同名参数的单一值或多重值'
    },
    {
      key: 'queryParamMap',
      value: '一个 Observable，其中包含一个对所有路由都有效的查询参数组成的map对象。 用这个 map 可以获取来自查询参数的单一值或多重值'
    },
    {
      key: 'fragment',
      value: '一个适用于所有路由的 URL 的 fragment（片段）的 Observable'
    },
    {
      key: 'outlet',
      value: '要把该路由渲染到的 RouterOutlet 的名字。对于无名路由，它的路由名是 primary，而不是空串'
    },
    {
      key: 'routeConfig',
      value: '用于该路由的路由配置信息，其中包含原始路径'
    },
    {
      key: 'parent',
      value: '当该路由是一个子路由时，表示该路由的父级 ActivatedRoute'
    },
    {
      key: 'firstChild',
      value: '包含该路由的子路由列表中的第一个 ActivatedRoute'
    },
    {
      key: 'children',
      value: '包含当前路由下所有已激活的子路由'
    }
  ];
  tableData2 = [
    {
      key: 'NavigationStart',
      value: '本事件会在导航开始时触发'
    },
    {
      key: 'RoutesRecognized',
      value: '本事件会在路由器解析完 URL，并识别出了相应的路由时触发'
    },
    {
      key: 'RouteConfigLoadStart',
      value: '本事件会在 Router 对一个路由配置进行惰性加载之前触发'
    },
    {
      key: 'RouteConfigLoadEnd',
      value: '本事件会在路由被惰性加载之后触发'
    },
    {
      key: 'NavigationEnd',
      value: '本事件会在导航成功结束之后触发'
    },
    {
      key: 'NavigationCancel',
      value: '本事件会在导航被取消之后触发。 这可能是因为在导航期间某个路由守卫返回了 false'
    },
    {
      key: 'NavigationError',
      value: '这个事件会在导航由于意料之外的错误而失败时触发'
    }
  ];
  code5 = `
    constructor(router:Router) {
        router.events.subscribe(event:Event => {
            if(event instanceof NavigationStart) {
            //显示进度条
            } else if(event instanceof NavigationEnd) {
            //隐藏进度条
            }
        });
    }
    `;
}
