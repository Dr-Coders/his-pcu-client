/**
 * Created by Nirmal on 5/1/2017.
 */
var myApp = angular.module("Route").controller("pcuController", function ($scope, $http, $interval) {
    $scope.message = "Prescription Page";
    // $scope.TimedRefresh = function(t) {
    //     console.log(t);
    //     setTimeout("location.reload(true);", t*60);
    // }
    //
    // $scope.TimedRefresh(10);
    // $interval(getPrescriptions($scope,$http),5000);

    //Prscriptions
    $scope.previousDate = "";
    
    $scope.printDate = function (date) {
        if($scope.previousDate != date){
            $scope.previousDate = date;
           return date;
        }
        else{
            return '';
        }
    }
    
    //db access
    //get prescriptions from db
    $http.get('http://localhost:8080/api/diagnosis')
        .then(function (response) {
            console.log("I got the data I requested : " + response.data);
            $scope.prescriptiondata = response.data;
        });

    //add prescription to the db
    $scope.formData = {};
    $scope.addPrescription = function () {
        console.log($scope.formData);
        $http.post('http://localhost:8080/api/diagnosis',$scope.formData)
            .then(function(response) {
            console.log(response);
        });
    };

    //get drugs from db
    $http.get('http://localhost:8080/api/drugs')
        .then(function (response) {
            console.log("I got the data I requested : " + response.data);
            $scope.drugdata = response.data;
        });

})

// function getPrescriptions($scope,$http) {
//     $http.get('/api/prescriptions')
//         .then(function (response) {
//             $scope.prescriptiondata = response.data;
//             console.log(response.data);
//         });
// }