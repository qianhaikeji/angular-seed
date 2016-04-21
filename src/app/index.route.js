(function() {
    'use strict';

    angular
        .module('app')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    '': {
                        templateUrl: 'app/layout/shell.html',
                        controller: 'ShellController',
                        controllerAs: 'vm'
                    },
                    'topnav@app': {
                        templateUrl: 'app/layout/topnav.html',
                        controller: 'TopnavController',
                        controllerAs: 'vm'
                    },
                    'content@app': {
                        templateUrl: 'app/main/main.html',
                        controller: 'MainController',
                        controllerAs: 'vm'
                    },
                    'footer@app': {
                        templateUrl: 'app/layout/footer.html',
                        controller: 'FooterController',
                        controllerAs: 'vm'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }

})();
