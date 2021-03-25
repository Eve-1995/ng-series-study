import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Anchor } from 'src/app/libs/content-fill/content-fill.interface';

@Component({
  templateUrl: './advanced-router.component.html',
  styleUrls: ['./advanced-router.component.scss']
})
export class AdvancedRouterComponent {
  constructor(private router: Router) {}

  anchor: Anchor[] = [
    {
      href: '#resume',
      title: '概述'
    },
    {
      href: '#Routes',
      title: 'Routes'
    },
    {
      href: '#asynchronous-router',
      title: '异步路由'
    },
    {
      href: '#router-params',
      title: '路由传参'
    },
    {
      href: '#CanActivate',
      title: 'CanActivate'
    },
    {
      href: '#CanDeactivate',
      title: 'CanDeactivate'
    },
    {
      href: '#CanActivateChildAndCanLoad',
      title: '其他守卫'
    },
    {
      href: '#preload',
      title: '预加载'
    },
  ];

  code1 = `
    import { Routes } from '@angular/router';
    const routes: Routes = [
        { path: 'demo1', component: Demo1Component },
        { path: 'demo2', component: Demo2Component },
        { path: '',   redirectTo: '/demo1', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent }
    ];
    `;
  code2 = `
    angular.ink
    angular.ink/demo1
    `;
  code3 = `
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';

    import { BrowseProductComponent } from './browse-product/browse-product.component';
    import { BuyProductComponent } from './buy-product/buy-product.component';

    const routes: Routes = [
    { path: 'browse-product', component: BrowseProductComponent },
    { path: 'buy-product', component: BuyProductComponent }
    ];

    @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    })
    export class UserRoutingModule { }

    `;
  code4 = `
    import { NgModule } from '@angular/core';
    import { UserRoutingModule } from './angular-routing.module';

    import { BrowseProductComponent } from './browse-product/browse-product.component';
    import { BuyProductComponent } from './buy-product/buy-product.component';

    @NgModule({
        imports: [
            UserRoutingModule,
        ],
        declarations: [
            BrowseProductComponent,
            BuyProductComponent
        ]
    })
    export class UserModule { }
    `;
  code5 = `
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';

    import { ManageProductComponent } from './manage-product/manage-product.component';
    import { OperatorRecordComponent } from './operator-record/operator-record.component';

    const routes: Routes = [
    { path: 'manage-product', component: ManageProductComponent },
    { path: 'operator-record', component: OperatorRecordComponent }
    ];

    @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    })
    export class AdminRoutingModule { }

    `;
  code6 = `
    import { NgModule } from '@angular/core';
    import { AdminRoutingModule } from './angular-routing.module';

    import { ManageProductComponent } from './manage-product/manage-product.component';
    import { OperatorRecordComponent } from './operator-record/operator-record.component';

    @NgModule({
        imports: [
            AdminRoutingModule,
        ],
        declarations: [
            ManageProductComponent,
            OperatorRecordComponent
        ]
    })
    export class AdminModule { }
    `;
  code7 = `
    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';

    const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '/user/browse-product', pathMatch: 'full' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
            { path: '**', redirectTo: '/user/browse-product' },
        ],
    }
    ];

    @NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule],
    })
    export class PagesRoutingModule {}
    `;
  code8 = `
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { RouterModule } from '@angular/router';
    import { AppComponent } from './app.component';
    import { PagesRoutingModule } from './pages/pages-routing.module';//总路由


    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        PagesRoutingModule,
        LayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]//根启动模块
    })
    export class AppModule { }
    `;
  code9 = `
    import { Component } from '@angular/core';

    @Component({
    selector: 'app-root',
    template: '//左边应该是数字键1左边的符号,案例中我使用的是单引号,因为我的代码格式化插件已经使用了这个符号了,所以需要换个符号.注意即可,切莫直接复制运行,需要修改的.
        <h1>Angular Router</h1>
        <nav>
            <a routerLink="/browse-product">browse-product</a>
            <a routerLink="/buy-product">buy-product</a>
            <a routerLink="/manage-product">manage-product</a>
            <a routerLink="/operator-record">operator-record</a>
        </nav>
        <router-outlet></router-outlet>
    '
    })
    export class AppComponent { }
    `;
  navigate() {
    this.router.navigate(['/angular/params-router'], {
      queryParams: {
        name: '前夕',
        words: '最美的是相逢,最难的是重逢.'
      }
    });
  }
  code10 = `
    //html
    <button (click)="navigate()" nz-button nzType="primary">携参跳转</button>
    //ts
    navigate() {
        this.router.navigate(['/angular/params-router'], {
            queryParams: {
                name: '前夕',
                words: '最美的是相逢,最难的是重逢.'
            }
        });
    }
    `;
  code11 = `
    //html
    <div class="center">
        <h1>{{name}}</h1>
        <h2>{{words}}</h2>
    </div>
    //ts
    activatedRoute.queryParams.subscribe(queryParams => {
        this.name = queryParams.name;
        this.words = queryParams.words;
    });
    `;
  code12 = `
    { path: 'params-router-true', component: ParamsRouterComponent, canActivate: [AuthGuardTrue] },
    `;
  code13 = `
    import { Injectable } from '@angular/core';
    import { CanActivate } from '@angular/router';
    import { of } from 'rxjs';
    import { delay } from 'rxjs/operators';

    @Injectable()
    export class AuthGuardTrue implements CanActivate {
        canActivate() {
            return of(true).pipe(delay(1000));//一秒后返回true
        }
    }

    @Injectable()
    export class AuthGuardFalse implements CanActivate {
        canActivate() {
            return of(false).pipe(delay(1000));//一秒后返回false
        }
    }
    `;
  code14 = `
    { path: 'params-router-true', component: ParamsRouterComponent, canActivate: [AuthGuardTrue] },
    { path: 'params-router-false', component: ParamsRouterComponent, canActivate: [AuthGuardFalse] },
    `;
  code15 = `
    <a routerLink="/angular/params-router-true">来者不拒</a>
    <a routerLink="/angular/params-router-false">拒之门外</a>
    `;
  code16 = `
    @Injectable()
    export class CanDeactivateGuard implements CanDeactivate<null> {
        canDeactivate() {
            return confirm('确认离开吗?');
        }
    }
    `;
  code17 = `
    { path: 'advanced-router-deactive', component: DemoDeactiveComponent, canDeactivate: [CanDeactivateGuard] }
    `;
  code18 = `
    <a routerLink="/angular/advanced-router">返回</a>
    `;
  code19 = `
    const adminRoutes: Routes = [
        {
            path: 'admin',
            component: AdminComponent,
            canActivate: [AuthGuard],
            children: [
                {
                    path: '',
                    canActivateChild: [AuthGuard],
                    children: [
                        { path: 'crises', component: ManageCrisesComponent },
                        { path: 'heroes', component: ManageHeroesComponent },
                        { path: '', component: AdminDashboardComponent }
                    ]
                }
            ]
        }
    ];
    `;
  code20 = `
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [AuthGuard]
    },
    `;
  code21 = `
    @NgModule({
        imports: [RouterModule.forRoot(
            routes,
            {
            useHash: false,
            preloadingStrategy: PreloadAllModules // 开启预加载
            }
        )],
        exports: [RouterModule],
    })
    `;
}
