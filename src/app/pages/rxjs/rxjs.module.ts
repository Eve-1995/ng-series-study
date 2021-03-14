import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { InitRxjsComponent } from './init-rxjs/init-rxjs.component';
import { OperatorsComponent } from './operators/operators.component';

const COMPONENTS_DECLARATIONS = [InitRxjsComponent, OperatorsComponent];
const DIRECTIVE_DECLARATIONS = [];
const COMPONENTS_ENTRY = [];
@NgModule({
  imports: [SharedModule, RxjsRoutingModule],
  declarations: [COMPONENTS_DECLARATIONS, DIRECTIVE_DECLARATIONS, COMPONENTS_ENTRY],
  entryComponents: COMPONENTS_ENTRY
})
export class RxjsModule {}
