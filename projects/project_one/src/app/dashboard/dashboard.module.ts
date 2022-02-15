import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [MatButtonModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
