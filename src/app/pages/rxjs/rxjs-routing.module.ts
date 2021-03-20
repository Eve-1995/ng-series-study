import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitRxjsComponent } from './init-rxjs/init-rxjs.component';
import { OperatorsComponent } from './operators/operators.component';

const routes: Routes = [
  { path: 'init-rxjs', component: InitRxjsComponent },
  { path: 'operators', component: OperatorsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule {}
