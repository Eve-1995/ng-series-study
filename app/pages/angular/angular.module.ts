import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AngularRoutingModule } from './angular-routing.module';

import { CreateComponent } from './create/create.component';
import { ConventionalUsageComponent } from './conventional-usage/conventional-usage.component';
import { InitPageComponent } from './create/init-page/init-page.component';
import { StructuralDirectiveComponent } from './directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './directive/attribute-directive/attribute-directive.component';
import { NssMilkTeaDirective } from './directive/structural-directive/nss-milk-tea-directive/milk-tea.directive';
import { NssStyleDirective } from './directive/attribute-directive/nss-style-directive/nss-style.directive';
import { ComponentCommunicationComponent } from './component/component-communication/component-communication.component';
import { ComponentStylesComponent } from './component/component-styles/component-styles.component';
import { ChildCommunicationComponent } from './component/component-communication/child/child-communication.component';
import { ChildStyles1Component } from './component/component-styles/child/child1/child-styles.component';
import { ChildStyles2Component } from './component/component-styles/child/child2/child-styles.component';
import { ChildStyles3Component } from './component/component-styles/child/child3/child-styles.component';
import { DynamicComponentComponent } from './component/dynamic-component/dynamic-component.component';
import { AddPersonComponent } from './component/dynamic-component/child/add-person.component';
import { StomachComponent } from './conventional-usage/stomach/stomach.component';
import { PipeComponent } from './pipe/pipe.component';
import { ShapePipe } from './pipe/shape-pipe/shape.pipe';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { EmotionComponent } from './lifecycle/emotion/emotion.component';
import { InitialFormComponent } from './form/initial-form/initial-form.component';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';
import { ValidationFormComponent } from './form/validation-form/validation-form.component';
import { ForbiddenValidatorDirective } from './form/validation-form/forbidden-name.directive';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { DynamicFormComponent } from './form/dynamic-form/dynamic-form.component';
import { ShowQuestionComponent } from './form/dynamic-form/show-question/show-question.component';
import { ServiceComponent } from './service/service.component';
import { ServiceChildComponent } from './service/child/service/service-child.component';
import { ComponentChildComponent } from './service/child/component/component-child.component';
import { RootService } from './service/service/demo.service';
import { InitRouterComponent } from './router/init-router/init-router.component';
import { AdvancedRouterComponent } from './router/advanced-router/advanced-router.component';
import { ParamsRouterComponent } from './router/advanced-router/demo/params-router.component';
import { AuthGuardTrue, AuthGuardFalse, CanDeactivateGuard } from './router/advanced-router/authGuard/auth-guard.service';
import { DemoDeactiveComponent } from './router/advanced-router/demo-deactive/demo-deactive.component';
import { ContentFillModule } from 'src/app/libs/content-fill';

const COMPONENTS_DECLARATIONS = [
  DemoDeactiveComponent,
  StructuralDirectiveComponent,
  AttributeDirectiveComponent,
  CreateComponent,
  ConventionalUsageComponent,
  InitPageComponent,
  ComponentCommunicationComponent,
  ComponentStylesComponent,
  ChildCommunicationComponent,
  ChildStyles1Component,
  ChildStyles2Component,
  ChildStyles3Component,
  DynamicComponentComponent,
  StomachComponent,
  PipeComponent,
  LifecycleComponent,
  EmotionComponent,
  InitialFormComponent,
  TemplateDrivenFormComponent,
  ValidationFormComponent,
  ReactiveFormComponent,
  DynamicFormComponent,
  ShowQuestionComponent,
  ServiceComponent,
  ServiceChildComponent,
  ComponentChildComponent,
  InitRouterComponent,
  AdvancedRouterComponent,
  ParamsRouterComponent
];
const DIRECTIVE_DECLARATIONS = [NssMilkTeaDirective, NssStyleDirective];
const COMPONENTS_ENTRY = [AddPersonComponent];

@NgModule({
  imports: [SharedModule, ContentFillModule, AngularRoutingModule],
  declarations: [COMPONENTS_DECLARATIONS, DIRECTIVE_DECLARATIONS, COMPONENTS_ENTRY, ShapePipe, ForbiddenValidatorDirective],
  entryComponents: COMPONENTS_ENTRY,
  providers: [RootService, AuthGuardTrue, AuthGuardFalse, CanDeactivateGuard]
})
export class AngularModule {}
