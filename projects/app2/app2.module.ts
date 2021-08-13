import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App2Component } from './app2.component';
import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [App2Component],
  imports: [CommonModule, ButtonModule],
  exports: [App2Component],
})
export class BannerModule {}