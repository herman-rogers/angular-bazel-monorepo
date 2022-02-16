import * as angular from 'angular';
import { setAngularJSGlobal, UpgradeModule } from '@angular/upgrade/static';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UpgradeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    DashboardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // @ts-ignore
    setAngularJSGlobal(angular.default || angular);
  }
}
