import { Component } from '@angular/core';
import { fakeLib, utilOne } from '@packages/libOne';
import { fakeJsLib } from '@packages/libJs';

@Component({
  template: `<p>App1 Component</p>`,
})
export class App1Component {
  example: string = '';
}