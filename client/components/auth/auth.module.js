'use strict';

angular.module('gatherApp.auth', [
  'gatherApp.constants',
  'gatherApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
