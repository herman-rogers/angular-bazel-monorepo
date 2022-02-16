import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularLibModule } from '@packages/angularLib';
import { AppComponent } from './app.component';
// import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, AngularLibModule],
  exports: [AppComponent],
})
export class AppModule {}
