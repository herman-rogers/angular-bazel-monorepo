import { platformBrowser } from '@angular/platform-browser';
import { App1Module } from './app1.module';

platformBrowser()
  .bootstrapModule(App1Module)
  .catch((err) => console.error(err));
