import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule as cdkLayoutModule } from '@angular/cdk/layout';

import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [SharedModule, cdkLayoutModule],
  declarations: [LayoutComponent, SidebarComponent],
  exports: [LayoutComponent, SidebarComponent]
})
export class LayoutModule {}
