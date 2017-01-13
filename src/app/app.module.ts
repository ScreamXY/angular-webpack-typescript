import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-cookies';
import 'angular-messages';
import 'angular-resource';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-material';
import 'angular-moment';
import { AppComponent } from './app.component';

import '../styles.css';
import 'angular-material/angular-material.css';

/**
 * @name angularStack
 * @description
 * # angularStack
 *
 * Main module of the application.
 */
angular
  .module('angularStack', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngMaterial',
    'angularMoment'
  ])
  .component('appComponent', AppComponent());

// .config(angularStack.Routes)
// .config(angularStack.Config);


Number.prototype.roundToPlaces = roundToPlaces;
function roundToPlaces(places: number): number {
  places = Math.pow(10, places);
  return Math.round(this * places) / places;
}

window.scream = window.scream || {};

window.scream.isNull = isNull;
function isNull(val: any): boolean {
  return val === null;
}

window.scream.isUndefined = isUndefined;
function isUndefined(val: any): boolean {
  return val === undefined;
}

window.scream.isUndefinedOrNull = isUndefinedOrNull;
function isUndefinedOrNull(val: any): boolean {
  return window.scream.isUndefined(val) || window.scream.isNull(val);
}

(function bootstrapApp() {
  angular.bootstrap(document, ['angularStack']);
})();

export class AppModule { }
