(function() {
    'use strict';

    angular
        .module('app')
        .controller('FooterController', FooterController);

    FooterController.$inject = ['$scope', '$state', 'logger'];

    function FooterController($scope, $state, logger) {
        /*jshint validthis: true */
        var vm = this;
        
        activate();

        function activate() {
        }
    }
})();
