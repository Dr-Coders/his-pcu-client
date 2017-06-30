/**
 * Created by Nirmal on 6/28/2017.
 */

app.controller('DiagnosisController',['$scope','$rootScope','DiagnosisService','DoctorService','$filter',function ($scope,$rootScope,DiagnosisService,DoctorService,$filter) {
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
    $scope.previourDate = "";


    //add diagnosis to the db
    $scope.formData = {};
    $scope.addDiagnosis = function () {
        $scope.formData.patient = $rootScope.selected_patient;
        console.log($scope.formData);
        DiagnosisService.addDiagnosis($scope.formData)
            .then(function(response) {
                $rootScope.loadDiagnosis();
                console.log("Add diagnosis response : " + response);
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

    $scope.showDoctor = function (doctor_id) {
        $scope.selecteddoctordata = $filter('filter')($scope.doctordata, {_id: doctor_id })[0];
        console.log("Selected doctor : " + doctor_id + " data : " + $scope.selecteddoctordata.firstname);
    }

}]);