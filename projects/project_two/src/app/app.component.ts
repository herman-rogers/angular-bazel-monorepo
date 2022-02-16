import { Component } from '@angular/core';
// import { fakeLib, utilOne } from '@packages/libOne';
// import { fakeJsLib } from '@packages/libJs';

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

      <span>Project Two</span>
    </mat-toolbar>

    <project-two-dashboard></project-two-dashboard>
  `,
})
export class AppComponent {}
