(function() {
'use strict';

    angular.module('sinconta', ['ui.router', 'ui.materialize']).controller('AppController', AppController);

    function AppController($state, $rootScope){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user && user.uid === '9AoxBl06IedU7IWA83hRERhlOUg1') {
                $rootScope.user = user;
                $state.go('dashboard.declaraciones');
            } else {
                $state.go('login');
            }
        });
    }

})();