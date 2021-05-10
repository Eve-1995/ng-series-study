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
    path: 'render',
    component: RenderComponent
  },
  { path: '**', redirectTo: '/render' }
];

export const declarations: Array<Type<any> | any[]> = [...components, ...pages];

export function getComponent(index: string): { component: any } {
  switch (index) {
    case '001':
      return {
        component: Page001Component
      };
    case '002':
      return {
        component: Page002Component
      };
    case '003':
      return {
        component: Page003Component
      };
    case '004':
      return {
        component: Page004Component
      };
    case '005':
      return {
        component: Page005Component
      };
    case '006':
      return {
        component: Page006Component
      };
    case '007':
      return {
        component: Page007Component
      };
    case '008':
      return {
        component: Page008Component
      };
    case '009':
      return {
        component: Page009Component
      };
    default:
      return {
        component: Page001Component
      };
  }
}
