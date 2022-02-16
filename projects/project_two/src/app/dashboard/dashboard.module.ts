import { NgModule } from '@angular/core';
import { SharedButtonModule } from '@packages/shared-components';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedButtonModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
