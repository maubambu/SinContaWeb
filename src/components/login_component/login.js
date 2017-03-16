(function() {
'use strict';


    angular
        .module('sinconta')
        .component('loginCmp', {
            templateUrl: '/src/components/login_component/login.html',
            controller: LoginController,
            controllerAs: 'vm'
        });

    LoginController.inject = [];
    function LoginController() {
        var vm = this;
        vm.attemptLogin = attemptLogin;

        function attemptLogin(){
            firebase.auth().signInWithEmailAndPassword(vm.email, vm.password).catch(function(error) {
                if (error){
                    alert(error);
                }
            });
        }
        
    }
})();