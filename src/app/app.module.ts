import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { OverlayModule } from '@angular/cdk/overlay';

import { LayoutModule } from './layout/layout.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoadingBarRouterModule,
    HttpClientModule,
    RouterModule,
    PagesRoutingModule,
    LayoutModule,
    OverlayModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
