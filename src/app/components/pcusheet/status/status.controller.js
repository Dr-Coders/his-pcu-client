/**
 * Created by Nirmal on 7/1/2017.
 */

app.controller('StatusController',['$scope','$rootScope','PrescriptionService','DiagnosisService','$filter',function ($scope,$rootScope,PrescriptionService,DoctorService,DrugService,$filter) {
    $scope.loadDiagnosiss = function() {
        console.log("Getting data diagnosis")
        if($rootScope.selected_patient) {
            DiagnosisService.getDiagnosis($rootScope.selected_patient)
                .then(function (response) {
                    console.log("I got the data I requested diagnosis : " + response.data[0]);
                    $scope.diagnosisdata = response.data;
                });
        }
    };
    $scope.loadDiagnosiss();

    $scope.loadPrescription = function () {
        PrescriptionService.getPrescriptions()
            .then(function (response) {
                console.log("I got the data I requested : " + response.data);
                $scope.prescriptiondata = response.data;
            });
    };
    $scope.loadPrescription();
}]);
