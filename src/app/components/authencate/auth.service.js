(function() {
    'use strict';

    angular
        .module('app')
        .factory('authservice', authservice)
        .run(configRouter);

    /* @ngInject */
    function authservice(dataservice, $state, toastr, $http, $cookies, logger, $q) {

        var service = {
            logined    : false,
            register   : register,
            login      : login,
            logout     : logout,
            loadCookie : loadCookie
        };

        return service;

        function register(username, password){
            return dataservice.register(username, password).then(authSuccess, authFailure);
        }

        function login(username, password){
            // 登录时头部放用户名和密码
            return dataservice.login(username, password).then(authSuccess, authFailure);
        }

        function logout(){
            deactiveAuthInfo();
            toastr.success('退出成功，欢迎再次访问！', '提醒');
        }

        function setAuthHeader(username, token){
            if (username == null){
                $http.defaults.headers.common.Authorization = '';
            }else if (token == undefined){
                $http.defaults.headers.common.Authorization = 'ApiKey ' + username + ":";
            }else{
                $http.defaults.headers.common.Authorization = 'ApiKey ' + username + ":" + token;
            }
        }

        function authSuccess(data){
            if (data.status == "ERROR"){
                toastr.error(data.message, '错误');
                return $q.reject();
            } else{
                activeAuthInfo(data.data);    
                toastr.success(data.data.username + '，欢迎访问！', '提醒');
            }
        }

        function authFailure(data){
            deactiveAuthInfo();
            logger.error('登录失败');
        }

        function activeAuthInfo(data){
            saveCookie(data.api_key, data.username);
            loadCookie();
        }

        function deactiveAuthInfo(){
            clearCookie();
            loadCookie();
        }

        function saveCookie(token, username){
            $cookies.put('token', token);
            $cookies.put('username', username);
        }

        function loadCookie(){
            var token = $cookies.get("token");
            var username = $cookies.get("username");

            if (token && username){
                service.logined=true;
                service.username=username;
                setAuthHeader(username, token);
            } else{
                service.logined=false;
                service.username=null;
                setAuthHeader(null);          
            }
        }

        function clearCookie(){
            $cookies.remove('token');
            $cookies.remove('username');
        }
    }

    function configRouter($state, authservice, $rootScope, toastr) {
        authservice.loadCookie();

        // 1.每次跳转路由前，检查下authservice中的标志authencated，如果没有鉴权，获取下currentUser，然后再进行跳转。
        // 并将标志authencated置为true，避免每次跳转路由都去先请求后台获取currentUser。
        // 2.登出前，将标志authencated置为false。
        /*eslint angular/on-watch: 0*/
        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
                // app不需鉴权，因为app默认会跳order，oerder会做一次鉴权，免得弹两次登录提示。
                // if (toState.name === 'app.profile' && !authservice.logined){
                //     toastr.info('请先登录', '提醒');
                //     $state.go('app.login');
                //     event.preventDefault();
                // }
            }
        )
    }
})();