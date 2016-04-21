(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock)
    .run(configRouter);

  /** @ngInject */
  function runBlock(logger) {
    logger.debug('runBlock end');
  }

  function configRouter(dataservice, $state, toastr, $rootScope, $window) {
    /*eslint angular/on-watch: 0*/
    $rootScope.$on('$stateChangeSuccess', function() {
        $window.scrollTo(0, 0);
    });
  }
})();
