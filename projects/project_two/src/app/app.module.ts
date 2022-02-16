import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularLibModule } from '@packages/angularLib';
import { AppComponent } from './app.component';
// import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
