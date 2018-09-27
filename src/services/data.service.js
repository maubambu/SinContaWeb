(function() {
'use strict';

    angular
        .module('sinconta')
        .service('dataService', dataService);

    dataService.inject = [];
    function dataService() {
        var service = this;
        service.getDeclaraciones = getDeclaraciones;
        service.updateDeclaracion = updateDeclaracion

        var declaracionesTable = firebase.database().ref("/declarations");

        function getDeclaraciones(callback){
            declaracionesTable.once('value', function(snapshot){
                var value = snapshot.val();
                callback(value);
            });
        }

        function updateDeclaracion(id, state, callback){
            declaracionesTable.child(id).update({
                state: state
            });
        }
    }
})();