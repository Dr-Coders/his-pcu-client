/**
 * Created by Nirmal on 6/29/2017.
 */

app.controller('PrescriptionController',['$scope','$rootScope','PrescriptionService','DoctorService','DrugService','$filter',function ($scope,$rootScope,PrescriptionService,DoctorService,DrugService,$filter) {
    $scope.loadPrescription = function () {
        PrescriptionService.getPrescriptions()
            .then(function (response) {
                console.log("I got the data I requested : " + response.data);
                $scope.prescriptiondata = response.data;
            });
    };
    $scope.loadPrescription();

    //add diagnosis to the db

    $scope.addPrescription = function () {
        console.log($scope.formData);
        $scope.formData.patient = $rootScope.selected_patient;
        PrescriptionService.addPrescription($scope.formData)
            .then(function() {
                $scope.loadPrescription();
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

    $scope.formData = {};
    $scope.formData.drugs = [{}];
    $scope.loadDrug = function() {
        DrugService.getDrugs()
            .then(function (response) {
                console.log("I got the data I requested : " + response.data);
                $scope.drugdata = response.data;
            });
    };
    $scope.loadDrug();

    $scope.drugdetails = [{}];
    $scope.whencount = [];
    $scope.adddrugdetail = function(){
        $scope.drugdetails.push({});
        $scope.formData.drugs.push({});
    }

    $scope.addremovewhen = function (index,when) {
        if($scope.whencount[index] == undefined){
            $scope.formData.drugs[index].when= [];
            $scope.formData.drugs[index].when[0]= false;
            $scope.formData.drugs[index].when[1]= false;
            $scope.formData.drugs[index].when[2]= false;
            $scope.whencount[index] = 0;
        }
        if(!$scope.formData.drugs[index].when[when]){
            $scope.formData.drugs[index].when[when] = true;
            $scope.whencount[index]++;
        }
        else{
            $scope.formData.drugs[index].when[when] = false;
            $scope.whencount[index]--;
        }

        console.log("when selected : " + index + " when : " + when + " count : " + $scope.whencount[index]);
    }

    $scope.resetFromData = function () {
        $scope.formData = {};
        $scope.formData.drugs = [{}];
        $scope.drugdetails = [{}];
        $scope.whencount = [];
    }

}]);
