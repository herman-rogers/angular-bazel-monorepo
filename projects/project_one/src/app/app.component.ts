import { Component } from '@angular/core';
// import { fakeLib, utilOne } from '@packages/libOne';
// import { fakeJsLib } from '@packages/libJs';

@Component({
  selector: 'app-component',
  template: `
    <div>
      <h1>Welcome to Project One</h1>
      <project-one-dashboard></project-one-dashboard>
    </div>
  `,
})
export class AppComponent {
  example: string = '';
}
