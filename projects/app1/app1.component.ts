import { Component } from '@angular/core';
import { utilOne } from './utilOne';
import { fakeLib } from '../../packages/libOne/libOne';

@Component({
  template: `<p>App1 Component</p>`,
})
export class App1Component {
  example: string = '';
}