/**
 * Created by Waruna on 6/29/2017.
 */
angular.module('Route')
    .controller('registrationController', function($scope,$http,registrationService,$rootScope){

        $scope.Patients= [];

        $scope.tableload = function () {

            registrationService.getpatient().then(function (response) {
                     console.log(response.data);
                    // $scope.Patients.name = response.data.name;


                },function(err){
                    // console.log(err);
                });

        };
        $scope.tableload();

        $scope.Viewpatient = function (nic) {
            $rootScope.NIC =nic;
            $rootScope.sheetEnable =true;
        };

        $scope.submit = function (patientDetails) {
            console.log("calling the cintroller");
            // if (fbear.name != null && fbear.owner != null && fbear.name != "" && fbear.owner != "") {
            registrationService.savePatient(patientDetails)
                .then(function (response) {
                    // $scope.patientDetails = {};
                }, function (err) {
                    console.log(err);
                });
        }
    })