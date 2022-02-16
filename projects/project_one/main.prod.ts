import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModule } from './src/app/app.module';

enableProdMode();
platformBrowser()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
