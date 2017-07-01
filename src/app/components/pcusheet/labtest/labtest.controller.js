/**
 * Created by Waruna on 6/29/2017.
 */
angular.module('Route')
    .controller('labtestController',['$scope','$rootScope','$http','LabtestService','DoctorService','$filter', function ($scope,$rootScope, $http, LabtestService, DoctorService, $filter) {
        $scope.view = 1;

        $scope.changeview = function (view) {
            $scope.view = view;
        }

        $scope.labtests = {};
        $scope.labresult = {};
        $scope.addEntry = function (labtests) {
            $scope.labtests = labtests;
            console.log("Lab test : " + labtests.labtestname + " test : " + $scope.labtests.medicalcase);
            labtests.patient = $rootScope.selected_patient;
            console.log("labform : " + labtests.medicalcase + " patient : " + labtests.patient);
            LabtestService.addLabtest(labtests)
                .then(function() {
                    $scope.loadLabtests();
                    console.log("Add labtest response : ");
                });

        }
        $scope.addResult = function (labresult) {
            console.log("labresult : " , labresult);
            // $scope.labresult = labresult;
            //console.log("Lab test : " + labtests.labtestname + " test : " + $scope.labtests.medicalcase);
            labresult.patient = $rootScope.selected_patient;
            labresult.medicalcase = $scope.selectedlabtestdata.medicalcase;
            labresult.doctor = $scope.selectedlabtestdata.doctor;
            labresult.labtestname = $scope.selectedlabtestdata.labtestname;
            labresult.date = $scope.selectedlabtestdata.date;
            labresult.labresultstatus = 'have';
           console.log("labform : " + labresult.patient + " id : "  + labresult.medicalcase);
            LabtestService.updateLabtest($scope.selectedlabtestdata._id,labresult)
                .then(function() {
                    $scope.loadLabtests();
                    console.log("Add labtest response : ");
                });

        }
        $scope.loadlabtestname = function () {
            LabtestService.getLabtests()
                .then(function (response) {
                    console.log("I got the data I requested : " + response.data);
                    $scope.labtestinfo = response.data;
                });
        };
        $scope.loadlabtestname();


        $scope.loadDoctors = function () {
            DoctorService.getDoctors()
                .then(function (response) {
                    console.log("I got the data I requested : " + response.data);
                    $scope.doctordata = response.data;
                });
        };
        $scope.loadDoctors();

        $scope.loadLabtests = function () {
            LabtestService.getLabtests()
                .then(function (response) {
                    console.log("Labtests from db : " + response.data);
                    $scope.labtestsdata = response.data;
                })
        };
        $scope.loadLabtests();

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

        $scope.showDoctor = function (doctor_id) {
            $scope.selecteddoctordata = $filter('filter')($scope.doctordata, {_id: doctor_id })[0];
            console.log("Selected doctor : " + doctor_id + " data : " + $scope.selecteddoctordata.firstname);
        }

        $scope.getselectedlabtestdata = function (labtest_id) {
            // labtest_id = $scope.selectedlabtestid;
            $scope.selectedlabtestdata = $filter('filter')($scope.labtestsdata, {_id: labtest_id })[0];
            console.log("Selected lab test : " + labtest_id + " data : " + $scope.selectedlabtestdata.medicalcase);

        }

        $scope.resetLabResultForm = function () {

            $scope.labtests = {};
            $scope.labresult = {};
            $scope.selectedlabtestdata = {};
            $scope.selectedlabtestid = '';
        }

    }])