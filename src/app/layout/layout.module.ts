import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar';
import {LayoutModule as cdkLayoutModule} from '@angular/cdk/layout';

import { LayoutComponent } from './layout.component';
import { LayoutSidebarComponent } from './sidebar/sidebar.component';

const COMPONENTS_DECLARATIONS = [
  LayoutComponent,
  LayoutSidebarComponent
];

@NgModule({
  imports: [
    SharedModule,
    cdkLayoutModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [
    ...COMPONENTS_DECLARATIONS
  ],
  exports: [
    ...COMPONENTS_DECLARATIONS
  ]
})
export class LayoutModule { }
