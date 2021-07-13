import { Component } from '@angular/core';
import { fakeLib } from '../../packages/libOne/libOne';
import { utilOne } from '../../packages/libOne/utilOne';

@Component({
  template: `<p>App1 Component</p>`,
})
export class App1Component {
  example: string = '';
}