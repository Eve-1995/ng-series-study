import { Type } from '@angular/core';
import { Routes } from '@angular/router';
import { Demo01Component } from './demo/demo-01.component';
import { Demo02Component } from './demo/demo-02.component';
import { Page01Component } from './page/page-01.component';
import { Page02Component } from './page/page-02.component';

const component = [Demo01Component, Demo02Component];
const page = [Page01Component, Page02Component];

export const routes: Routes = [
  {
    path: '',
    component: Page01Component
  },
  {
    path: '01',
    component: Page01Component
  },
  {
    path: '02',
    component: Page02Component
  },
  { path: '**', redirectTo: '/01' }
];

export const declarations: Array<Type<any> | any[]> = [...component, ...page];
