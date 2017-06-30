/**
 * Created by Nirmal on 6/29/2017.
 */

app.controller('PrescriptionController',['$scope','PrescriptionService','DoctorService','$filter',function ($scope,PrescriptionService,DoctorService,$filter) {
    $scope.loadPrescription = function () {
        PrescriptionService.getPrescriptions()
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

    $scope.showDate = function (date) {
        if(date != $scope.previourDate){
            $scope.previourDate = date;
            return true;
        }
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
