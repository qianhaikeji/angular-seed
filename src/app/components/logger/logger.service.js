(function() {
    'use strict';

    angular
        .module('app')
        .factory('logger', logger);

    logger.$inject = ['$log', 'toastr'];

    function logger($log, toastr) {
        var service = {
            showToasts: true,

            debug   : debug,
            info    : info,
            success : success,
            warning : warning,
            error   : error,

            // straight to console; bypass toastr
            log     : $log.log
        };

        return service;
        /////////////////////

        function debug(message, data, title) {
            $log.debug('Debug: ' + message, data);
        }

        function info(message, data, title) {
            toastr.info(message, title);
            $log.info('Info: ' + message, data);
        }

        function success(message, data, title) {
            toastr.success(message, title);
            $log.info('Success: ' + message, data);
        }

        function warning(message, data, title) {
            toastr.warning(message, title);
            $log.warn('Warning: ' + message, data);
        }

        function error(message, data, title) {
            toastr.error(message, title);
            $log.error('Error: ' + message, data);
        }
    }
}());
