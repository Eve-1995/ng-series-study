import { Type } from '@angular/core';
import { Routes } from '@angular/router';
import { RenderComponent } from './container/render/render.component';
import {
  Page001Component,
  Page002Component,
  Page003Component,
  Page004Component,
  Page005Component,
  Page006Component,
  Page007Component,
  Page008Component,
  Page009Component
} from '@page';
import {
  DemoComponent,
  Demo001Component,
  Demo002Component,
  Demo003Component,
  Demo004Component,
  Demo005Component,
  Demo006Component,
  Demo007Component,
  Demo008Component
} from '@demo';

const components = [
  DemoComponent,
  Demo001Component,
  Demo002Component,
  Demo003Component,
  Demo004Component,
  Demo005Component,
  Demo006Component,
  Demo007Component,
  Demo008Component,
  RenderComponent,
  Page001Component,
  Page002Component,
  Page003Component,
  Page004Component,
  Page005Component,
  Page006Component,
  Page007Component,
  Page008Component,
  Page009Component
];
const pages = [RenderComponent];

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'render',
    pathMatch: 'full'
  },
  {
    path: 'render/:index',
    component: RenderComponent
  },
  { path: '**', redirectTo: '/render/01' }
];

export const declarations: Array<Type<any> | any[]> = [...components, ...pages];
