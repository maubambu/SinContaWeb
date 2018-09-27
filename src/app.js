(function() {
'use strict';

    angular.module('sinconta', ['ui.router', 'ui.materialize']).controller('AppController', AppController);

    function AppController($state, $rootScope){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                firebase.database().ref(`/roles/${user.uid}`).once("value", function (response) {
                    let val = response.val();
                    if (val && val.admin == true) {
                        $rootScope.user = user;
                        $state.go('dashboard.declaraciones');
                    } else {
                        console.error("User is not an admin");
                    }
                })
            } else {
                $state.go('login');
            }
        });
    }

})();