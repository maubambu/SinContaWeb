(function() {
'use strict';


    angular
        .module('sinconta')
        .component('topbar', {
            templateUrl: '/src/components/topbar_component/topbar.html',
            controller: TopbarController,
            controllerAs: 'vm'
        });

    TopbarController.inject = [];
    function TopbarController($rootScope, $scope) {
        var vm = this;

        vm.signOut = signOut;

        function signOut(){
            firebase.auth().signOut();
        }
        
        
        firebase.auth().onAuthStateChanged(function(user) {
            if (user){
                $scope.$apply(vm.user = user);
            }
        });
    }
})();