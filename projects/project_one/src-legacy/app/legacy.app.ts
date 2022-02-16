import * as jquery from 'jquery';
import * as angular from 'angular';

// @ts-ignore
window.$ = window.jQuery = jquery.default || jquery;

import { $locationShim } from '@angular/common/upgrade';
import { downgradeInjectable } from '@angular/upgrade/static';
import AppController from './app.controller';

export const app = angular
  .module('project-one-legacy', [])
  .factory('$location', downgradeInjectable($locationShim))
  .controller('AppController', AppController);
