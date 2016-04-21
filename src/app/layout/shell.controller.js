(function() {
    'use strict';

    angular
        .module('app')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['logger', '$rootScope'];

    function ShellController(logger, $rootScope) {
        /*jshint validthis: true */
        var vm = this;

        activate();

        function activate() {
            logger.debug('Welcome!', null);
        }
    }
})();
