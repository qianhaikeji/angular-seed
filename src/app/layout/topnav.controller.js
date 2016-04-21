(function() {
    'use strict';

    angular
        .module('app')
        .controller('TopnavController', TopnavController);

    TopnavController.$inject = ['$state', 'logger'];

    function TopnavController($state, logger) {
        /*jshint validthis: true */
        var vm = this;
        
        activate();

        function activate() {

        }
    }
})();
