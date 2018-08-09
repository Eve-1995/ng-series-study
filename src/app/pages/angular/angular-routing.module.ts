import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { ConventionalUsageComponent } from './conventional-usage/conventional-usage.component';
import { ComponentCommunicationComponent } from './component/component-communication/component-communication.component';
import { ComponentStylesComponent } from './component/component-styles/component-styles.component';
import { StructuralDirectiveComponent } from './directive/structural-directive/structural-directive-component';
import { AttributeDirectiveComponent } from './directive/attribute-directive/attribute-directive-component';
import { DynamicComponentComponent } from './component/dynamic-component/dynamic-component.component';
import { PipeComponent } from './pipe/pipe.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { InitialFormComponent } from './form/Initial-form/initial-form.component';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';
import { ValidationFormComponent } from './form/validation-form/validation-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { DynamicFormComponent } from './form/dynamic-form/dynamic-form.component';
import { ServiceComponent } from './service/service.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
