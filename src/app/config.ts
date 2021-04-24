import { Type } from '@angular/core';
import { Routes } from '@angular/router';
import { Container000Component } from './page/container/container-000.component';
import { Container001Component } from './page/container/container-001.component';
import { Container002Component } from './page/container/container-002.component';
import { Container003Component } from './page/container/container-003.component';
import { DemoComponent } from './page/demo/demo.component';
import { Demo001Component } from './page/demo/demo-001/demo-001.component';
import { Demo002Component } from './page/demo/demo-002/demo-002.component';
import { Demo003Component } from './page/demo/demo-003/demo-003.component';
import { Demo004Component } from './page/demo/demo-004/demo-004.component';
import { Demo005Component } from './page/demo/demo-005/demo-005.component';
import { RenderComponent } from './page/render/render.component';

const components = [
  Container000Component,
  Container001Component,
  Container002Component,
  Container003Component,
  DemoComponent,
  Demo001Component,
  Demo002Component,
  Demo003Component,
  Demo004Component,
  Demo005Component
];
const pages = [RenderComponent];

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'render',
    pathMatch: 'full'
  },
  {
    path: 'render',
    component: RenderComponent
  },
  { path: '**', redirectTo: '/render' }
];

export const declarations: Array<Type<any> | any[]> = [...components, ...pages];
