import { NgModule, Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import { SharedButtonModule } from '@packages/shared-components';
import { DashboardComponent } from './dashboard.component';
@Directive({
  selector: 'hero-detail',
})
export class HeroDetailDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('heroDetail', elementRef, injector);
  }
}

@NgModule({
  declarations: [DashboardComponent, HeroDetailDirective],
  imports: [SharedButtonModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
