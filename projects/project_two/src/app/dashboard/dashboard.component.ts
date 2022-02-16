import { Component } from '@angular/core';
// import { fakeLib, utilOne } from '@packages/libOne';
import { getJsString } from '@packages/lib-js';

@Component({
  selector: 'project-two-dashboard',
  template: `
    <div>
      <p>Dashboard Example</p>
      <p>Check JS Lib: {{ jsString() }}</p>

      <shared-button></shared-button>
    </div>
  `,
})
export class DashboardComponent {
  jsString(): string {
    return getJsString();
  }
}
