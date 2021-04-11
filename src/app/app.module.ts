import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { OverlayModule } from '@angular/cdk/overlay';

import { LayoutModule } from './layout/layout.module';
import { AppMarkdownModule } from './libs/markdown/markdown.module';
import { SharedModule } from 'dist/ng-docs/app/shared/shared.module';
import { declarations, routes } from './config';

@NgModule({
  declarations: [AppComponent, ...declarations],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    LoadingBarRouterModule,
    HttpClientModule,
    RouterModule,
    LayoutModule,
    AppMarkdownModule,
    OverlayModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
