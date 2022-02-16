import { Component } from '@angular/core';
import { increment_number } from '@packages/lib-ts';
import { getJsString } from '@packages/lib-js';

@Component({
  selector: 'project-two-dashboard',
  template: `
    <div>
      <p>Dashboard Example</p>
      <p>JS Lib: {{ jsString() }}</p>
      <p>TS Lib: {{ tsNumber(1) }}</p>

      <shared-button></shared-button>
    </div>
  `,
})
export class DashboardComponent {
  jsString(): string {
    return getJsString();
  }

  tsNumber(n: number): number {
    return increment_number(n);
  }
}
