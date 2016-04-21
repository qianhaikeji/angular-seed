(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $provide) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $provide.decorator('$uiViewScroll', function ($delegate) {
      return function (uiViewElement) {
        //覆盖原来的方法，解决路由跳转，页面不会滚到顶端的问题
      }; 
    });
  }

})();
