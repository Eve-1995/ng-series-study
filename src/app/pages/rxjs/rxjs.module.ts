import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { InitRxjsComponent } from './init-rxjs/init-rxjs.component';
import { OperatorsComponent } from './operators/operators.component';
import { ContentFillModule } from 'src/app/libs/content-fill';
import { MarkDownModule } from 'src/app/libs/markdown/markdown.module';
import { RxjsChild01Component } from './init-rxjs/children/rxjs-child-01.component';
import { RxjsChild02Component } from './init-rxjs/children/rxjs-child-02.component';
import { RxjsChild03Component } from './init-rxjs/children/rxjs-child-03.component';

const COMPONENTS_DECLARATIONS = [InitRxjsComponent, OperatorsComponent, RxjsChild01Component, RxjsChild02Component, RxjsChild03Component];
const DIRECTIVE_DECLARATIONS = [];
const COMPONENTS_ENTRY = [];
@NgModule({
  imports: [SharedModule, RxjsRoutingModule, MarkDownModule, ContentFillModule],
  declarations: [COMPONENTS_DECLARATIONS, DIRECTIVE_DECLARATIONS, COMPONENTS_ENTRY],
  entryComponents: COMPONENTS_ENTRY
})
export class RxjsModule {}
