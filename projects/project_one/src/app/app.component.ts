import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { app } from '../../src-legacy/app/legacy.app';

@Component({
  selector: 'app-component',
  template: `
    <mat-toolbar>
      <button
        mat-icon-button
        [matMenuTriggerFor]="menu"
        aria-label="Example icon-button with a menu"
      >
        <mat-icon>more_vert</mat-icon>
      </button>

      <mat-menu #menu="matMenu">
        <button mat-menu-item>
          <mat-icon>dialpad</mat-icon>
          <span>Redial</span>
        </button>
        <button mat-menu-item disabled>
          <mat-icon>voicemail</mat-icon>
          <span>Check voice mail</span>
        </button>
        <button mat-menu-item>
          <mat-icon>notifications_off</mat-icon>
          <span>Disable alerts</span>
        </button>
      </mat-menu>

      <span>Project One</span>
    </mat-toolbar>

    <project-one-dashboard></project-one-dashboard>

    <div #legacyApp ui-view></div>
  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('legacyApp', { static: false }) legacyApp: ElementRef;

  constructor(private upgrade: UpgradeModule) {}

  ngAfterViewInit() {
    this.upgrade.bootstrap(this.legacyApp.nativeElement, [app.name]);
  }
}
