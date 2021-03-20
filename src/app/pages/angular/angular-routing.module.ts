import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { ConventionalUsageComponent } from './conventional-usage/conventional-usage.component';
import { ComponentCommunicationComponent } from './component/component-communication/component-communication.component';
import { ComponentStylesComponent } from './component/component-styles/component-styles.component';
import { StructuralDirectiveComponent } from './directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './directive/attribute-directive/attribute-directive.component';
import { DynamicComponentComponent } from './component/dynamic-component/dynamic-component.component';
import { PipeComponent } from './pipe/pipe.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { InitialFormComponent } from './form/initial-form/initial-form.component';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';
import { ValidationFormComponent } from './form/validation-form/validation-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { DynamicFormComponent } from './form/dynamic-form/dynamic-form.component';
import { ServiceComponent } from './service/service.component';
import { InitRouterComponent } from './router/init-router/init-router.component';
import { AdvancedRouterComponent } from './router/advanced-router/advanced-router.component';
import { ParamsRouterComponent } from './router/advanced-router/demo/params-router.component';
import { AuthGuardTrue, AuthGuardFalse, CanDeactivateGuard } from './router/advanced-router/authGuard/auth-guard.service';
import { DemoDeactiveComponent } from './router/advanced-router/demo-deactive/demo-deactive.component';

const routes: Routes = [
  { path: 'structural-directive', component: StructuralDirectiveComponent },
  { path: 'attribute-directive', component: AttributeDirectiveComponent },
  { path: 'create', component: CreateComponent },
  { path: 'conventional-usage', component: ConventionalUsageComponent },
  { path: 'component-communication', component: ComponentCommunicationComponent },
  { path: 'component-styles', component: ComponentStylesComponent },
  { path: 'dynamic-component', component: DynamicComponentComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'initial-form', component: InitialFormComponent },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'validation-form', component: ValidationFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'dynamic-form', component: DynamicFormComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'init-router', component: InitRouterComponent },
  { path: 'advanced-router', component: AdvancedRouterComponent },
  { path: 'params-router', component: ParamsRouterComponent },
  { path: 'params-router-true', component: ParamsRouterComponent, canActivate: [AuthGuardTrue] },
  { path: 'params-router-false', component: ParamsRouterComponent, canActivate: [AuthGuardFalse] },
  { path: 'advanced-router-deactive', component: DemoDeactiveComponent, canDeactivate: [CanDeactivateGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule {}
