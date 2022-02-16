import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { SharedButtonModule } from '@packages/shared_components';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [MatToolbarModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
