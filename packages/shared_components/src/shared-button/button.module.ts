import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './button.component';

@NgModule({
  declarations: [SharedButtonComponent],
  imports: [CommonModule],
  exports: [SharedButtonComponent],
})
export class SharedButtonModule {}
