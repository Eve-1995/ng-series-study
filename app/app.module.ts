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
import { declarations, routes } from './config';
import { SharedModule } from './shared/shared.module';
import { ContentFillModule } from './libs/content-fill';

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
    ContentFillModule,
    OverlayModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
