import { NgModule } from '@angular/core';
import { SharedButtonModule } from '@packages/shared_components';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [],
  exports: [DashboardComponent],
})
export class DashboardModule {}
