/**
 * Created by Nirmal on 6/29/2017.
 */

app.controller('PrescriptionController',['$scope','PrescriptionService','$filter',function ($scope,PrescriptionService,$filter) {
    $scope.loadPrescription = function () {
        PrescriptionService.getPrescription()
            .then(function (response) {
                console.log("I got the data I requested : " + response.data);
                $scope.prescriptiondata = response.data;
            });
    };
    $scope.loadPrescription();

    //add diagnosis to the db
    $scope.formData = {};
    $scope.addPrescription = function () {
        console.log($scope.formData);
        PrescriptionService.addPrescription($scope.formData)
            .then(function(response) {
                console.log(response);
            });
    };

    $scope.messageD = "Hello Prescription Controller";

    $scope.printDate = function (date) {
        var newdate  = new Date(date);
        console.log(newdate);

        return date;
    };

    $scope.formatDate = function(date){
        return $filter('date')(new Date(date) , "dd MMM, yyyy ");
    };
}]);
