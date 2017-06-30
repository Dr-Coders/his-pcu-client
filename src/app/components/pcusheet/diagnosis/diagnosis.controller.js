/**
 * Created by Nirmal on 6/28/2017.
 */

app.controller('DiagnosisController',['$scope','$rootScope','DiagnosisService','DoctorService','$filter',function ($scope,$rootScope,DiagnosisService,DoctorService,$filter) {
    $scope.loadDiagnosis = function() {
        if($rootScope.selected_patient) {
            DiagnosisService.getDiagnosis($rootScope.selected_patient)
                .then(function (response) {
                    console.log("I got the data I requested : " + response.data);
                    $scope.diagnosisdata = response.data;
                });
        }
    };
    $scope.loadDiagnosis();
    $scope.previourDate = "";


    //add diagnosis to the db
    $scope.formData = {};
    $scope.addDiagnosis = function () {
        $scope.formData.patient = $rootScope.selected_patient;
        console.log($scope.formData);
        DiagnosisService.addDiagnosis($scope.formData)
            .then(function(response) {
                console.log("Add diagnosis response : " + response);
                $scope.loadDiagnosis();
            });
    };

    $scope.messageD = "Hello Diagnosis COntroller";

    $scope.printDate = function (date) {
        var newdate  = new Date(date);
        console.log(newdate);

        return date;
    };

    $scope.formatDate = function(date){
        return $filter('date')(new Date(date) , "dd MMM, yyyy ");
    };

    $scope.showDate = function (date) {
        if(date != $scope.previourDate)
            return true;
        else
            return false;
    };

    $scope.loadDoctors = function() {
        DoctorService.getDoctors()
            .then(function (response) {
                console.log("I got the data I requested : " + response.data);
                $scope.doctordata = response.data;
            });
    };
    $scope.loadDoctors();

}]);