(function() {
    'use strict';

    angular
        .module('insuranceFeApp')
        .controller('BankDialogController', BankDialogController);

    BankDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Bank'];

    function BankDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Bank) {
        var vm = this;

        vm.bank = entity;
        vm.clear = clear;
        vm.save = save;
		var bla;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.bank.id !== null) {
                Bank.update(vm.bank, onSaveSuccess, onSaveError);
            } else {
				bla={BankName:vm.bank.name};
                Bank.save(JSON.stringify(bla), onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('insuranceFeApp:bankUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();