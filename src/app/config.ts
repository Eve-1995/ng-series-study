import { Type } from '@angular/core';
import { Routes } from '@angular/router';
import { Container00Component } from './page/container/container-00.component';
import { Container01Component } from './page/container/container-01.component';
import { Container02Component } from './page/container/container-02.component';
import { DemoComponent } from './page/demo/demo.component';
import { Demo01Component } from './page/demo/demo-01/demo-01.component';
import { Demo02Component } from './page/demo/demo-02/demo-02.component';
import { Demo03Component } from './page/demo/demo-03/demo-03.component';
import { Demo04Component } from './page/demo/demo-04/demo-04.component';
import { Demo05Component } from './page/demo/demo-05/demo-05.component';
import { RenderComponent } from './page/render/render.component';

const components = [
  Container00Component,
  Container01Component,
  Container02Component,
  DemoComponent,
  Demo01Component,
  Demo02Component,
  Demo03Component,
  Demo04Component,
  Demo05Component
];
const pages = [RenderComponent];

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'render/01',
    pathMatch: 'full'
  },
  {
    path: 'render/:index',
    component: RenderComponent
  },
  { path: '**', redirectTo: 'render/:01' }
];

export const declarations: Array<Type<any> | any[]> = [...components, ...pages];
