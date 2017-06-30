/**
 * Created by Nirmal on 5/1/2017.
 */
app.controller("pcuController", function ($scope, $http, $interval,PatientService) {

    // $scope.TimedRefresh = function(t) {
    //     console.log(t);
    //     setTimeout("location.reload(true);", t*60);
    // }
    //
    // $scope.TimedRefresh(10);
    // $interval(getPrescriptions($scope,$http),5000);

    $scope.selected_patient = "";
    // $scope.patient_searching = false;
    $scope.selected_patient_data = {};
    $scope.view = 1;
    $scope.patientdata = [];

    $scope.changeview = function (view) {
        $scope.view = view;
    }

    $scope.loadPatient = function() {
        PatientService.getPatients()
            .then(function (response) {
                console.log("I got the data I requested : " + response.data);
                $scope.patientdata = response.data;
            });
    };
    $scope.loadPatient();

    $scope.gotopatient = function () {
        $scope.patient_searching = false
        console.log("patient selected : " + $scope.selected_patient);
        PatientService.getPatient($scope.selected_patient)
            .then(function (response) {
                console.log("name : " + response.data.firstname);
                $scope.selected_patient_data = response.data;
            })
    }
    //
    // $scope.searching = function () {
    //     $scope.patient_searching = true;
    // }
})
