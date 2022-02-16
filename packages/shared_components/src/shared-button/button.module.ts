import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedButtonComponent } from './button.component';

@NgModule({
  declarations: [SharedButtonComponent],
  imports: [MatButtonModule],
  exports: [SharedButtonComponent],
})
export class SharedButtonModule {}
