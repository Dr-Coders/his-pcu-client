'use strict';

var myapp = angular.module('Login', ['ngCookies'])
    .run(function($rootScope, $location, sessionService,$window){



    var place =$location.absUrl();
    console.log(place);
    var connected = sessionService.getid('uid');
    console.log(connected);
    if (connected == null) {

        if(place != "http://localhost:8000/login.html") {
            $window.location.href = "./../login.html";

        }


    }else{
            console.log(connected);
            if(place != "http://localhost:8000") {
                $window.location.href = "./../index.html";

            }

    }

})
.controller('loginCtrl',function ($scope,sessionService,$window) {
    $scope.msgtxt='';
    $scope.Username = '';
    $scope.Password = '';
    $scope.Check = '';
    $scope.login=function(){
        console.log($scope.Username+" login called");
        if($scope.Username == "admin" && $scope.Password == "pass"){
            $scope.Check='Correct information';
            // Setting a cookie
            sessionService.setid('uid',$scope.Username);
            window.location.href = "../index.html";

        }
        else {
            $scope.Check ='Invalid Username or password';
        }

    };
    $scope.CheckUser=function(){
        console.log("CheckUser called");
        if(sessionService.getid('uid')) {
            $scope.ClickMeToRedirect();
        }
        console.log(sessionService.getid('uid'));

    };
    $scope.logoutUser=function(){
        console.log("logout called");
        console.log(sessionService.destroy('uid'));
        $scope.CheckUser();
    };
    $scope.ClickMeToRedirect = function () {

        $window.location.href = "index.html";
    };


});






