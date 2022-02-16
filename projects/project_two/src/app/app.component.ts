import { Component } from '@angular/core';
import { fakeLib, utilOne } from '@packages/libOne';
// import { fakeJsLib } from '@packages/libJs';

@Component({
  template: `<p>App Two Component</p>`,
})
export class AppComponent {
  example: string = '';
}
