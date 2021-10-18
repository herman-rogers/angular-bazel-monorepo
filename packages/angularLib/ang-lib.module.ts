import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularLibComponent } from './ang-lib.component';

@NgModule({
  declarations: [AngularLibComponent],
  imports: [CommonModule],
  exports: [AngularLibComponent],
})
export class AngularLibModule {}
