import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// layout
import { LayoutComponent } from '../layout/layout.component';
import { RenderComponent } from '../render/render.component';

const routes: Routes = [
  {
    path: '',
    component: RenderComponent
  }
];

// const routes: Routes = [
//   {
//     path: '',
//     component: LayoutComponent,
//     children: [
//       { path: '', redirectTo: '/project/introduction', pathMatch: 'full' },
//       {
//         path: 'project',
//         loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
//       },
//       {
//         path: 'angular',
//         loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)
//       },
//       {
//         path: 'rxjs',
//         loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule)
//       },
//       {
//         path: 'recommend',
//         loadChildren: () => import('./recommend/recommend.module').then(m => m.RecommendModule)
//       },
//       { path: '**', redirectTo: '/project/introduction' }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
