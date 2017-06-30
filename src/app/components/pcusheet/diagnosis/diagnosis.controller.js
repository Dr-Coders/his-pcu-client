/**
 * Created by Nirmal on 6/28/2017.
 */

app.controller('DiagnosisController',['$scope','DiagnosisService','$filter',function ($scope,DiagnosisService,$filter) {
    $scope.loadDiagnosis = function() {
        DiagnosisService.getDiagnosis()
            .then(function (response) {
                console.log("I got the data I requested : " + response.data);
                $scope.diagnosisdata = response.data;
            });
    };
    $scope.loadDiagnosis();
    $scope.previourDate = "";


    //add diagnosis to the db
    $scope.formData = {};
    $scope.addDiagnosis = function () {
        console.log($scope.formData);
        DiagnosisService.addDiagnosis($scope.formData)
            .then(function(response) {
                console.log(response);
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


}]);