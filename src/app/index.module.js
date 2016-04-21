(function() {
  'use strict';

  angular
    .module('app', [
        /*
         * Angular modules
         */
        'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages',
        /*
         * 3rd Party modules
         */
        'restangular', 'ui.router', 'toastr']);
})();
