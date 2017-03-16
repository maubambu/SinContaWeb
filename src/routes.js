(function() {
'use strict';

    angular
        .module('sinconta')
        .config(function($stateProvider) {
            var loginState = {
                name: 'login',
                url: '/login',
                template: '<login-cmp></login-cmp>'
            }

            var dashboardState = {
                name: 'dashboard',
                url: '/',
                template: '<dashboard-cmp></dashboard-cmp>'
            }

            var declaracionesState = {
                name: 'dashboard.declaraciones',
                url:'declaraciones',
                template: '<declaraciones-cmp></declaraciones-cmp>'

            }

            $stateProvider.state(loginState);
            $stateProvider.state(dashboardState);
            $stateProvider.state(declaracionesState);
        });
})();