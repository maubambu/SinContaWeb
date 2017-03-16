(function() {
'use strict';


    angular
        .module('sinconta')
        .component('dashboardCmp', {
            templateUrl: '/src/components/dashboard_component/dashboard.html',
            controller: DashboardController,
            controllerAs: 'vm'
        });

    DashboardController.inject = [];
    function DashboardController() {
        var vm = this;
        
    }
})();