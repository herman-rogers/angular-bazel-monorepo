import { Component } from '@angular/core';
import { fakeLib } from '../../packages/libOne/libOne';
import { utilOne } from '../../packages/libOne/utilOne';

@Component({
  template: `<p>App2 Component</p>`,
})
export class App2Component {
  example: string = '';
}