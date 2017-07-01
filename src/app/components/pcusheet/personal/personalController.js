app.controller('PersonalController',['$scope','$rootScope','PatientService',function ($scope,$rootScope,PatientService) {
    $scope.updating = false;
    $scope.UpdatePatient = function (patient_data) {
        PatientService.updatePatient(patient_data._id,patient_data)
            .then(function () {
                console.log("PAtient updated",patient_data._id);
                $rootScope.loadPatient();
                $scope.updating = false;
            })
    }
}]);