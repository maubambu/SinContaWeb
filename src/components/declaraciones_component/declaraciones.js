(function() {
'use strict';


    angular
        .module('sinconta')
        .component('declaracionesCmp', {
            templateUrl: '/src/components/declaraciones_component/declaraciones.html',
            controller: DeclaracionesController,
            controllerAs: 'vm'
        });

    DeclaracionesController.inject = [];
    function DeclaracionesController(dataService, $scope) {
        var vm = this;
        vm.changeDeclaracionState = changeDeclaracionState;

        function changeDeclaracionState(id, state){
            dataService.updateDeclaracion(id, state, function(msg){

            })
        }

        firebase.auth().onAuthStateChanged(function(user) {
            if (user){
                dataService.getDeclaraciones(function (declaraciones) {
                    vm.declaraciones = declaraciones;
                    $scope.$apply();
                })
            }
        });
        
    }
})();