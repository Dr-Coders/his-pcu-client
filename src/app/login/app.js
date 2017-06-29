'use strict';

app.run(function($rootScope, $location, sessionService,$window){

    console.log("check");
    var place =$location.absUrl();
    console.log(place);
    var connected = sessionService.getid('uid');
    console.log(connected);
    console.log($rootScope.state);
    if (connected == undefined) {


        if($rootScope.state == "home" || $rootScope.state == undefined) {
            $rootScope.state = "login";
            $location.path("/login");

        }


    }else{
        console.log(connected);

        if($rootScope.state == "login") {
            $rootScope.state = "home";
            $location.path("/");
        }


    }

});
app.controller('loginCtrl',function ($scope,sessionService,$window,$location,$rootScope) {

    $scope.msgtxt='';
    $scope.Username = '';
    $scope.Password = '';
    $scope.Check = '';
    $rootScope.Loged = false;
    $rootScope.Super = false;
    console.log("controller called");

    $scope.login=function(){
        console.log($scope.Username+" login called");
        if(($scope.Username == "admin"|| $scope.Username == "super") && $scope.Password == "pass"){
            $scope.Check='Correct information';
            // Setting a cookie
            sessionService.setid('uid',$scope.Username);
            $rootScope.Loged = true;
            $rootScope.Super = true;

            // if($scope.Username == "admin") {
            //     console.log("super trueeed");
            //
            // }
            // else
            //          $rootScope.Super = false;

            console.log($rootScope.Super+ $scope.Check );
            $location.path("/");
        }
        else {
            $scope.Check ='Invalid Username or password';

        }

    };
    $scope.ClickMeToRedirect = function () {

        $location.path("/");
    };

    $scope.CheckUser=function(){
        console.log("CheckUser called");
        if(sessionService.getid('uid')) {
            $scope.ClickMeToRedirect();
            $rootScope.Loged = true;

        }else {
            $rootScope.Loged = false;
            console.log(sessionService.getid('uid'));
            $location.path("/login");
        }
    };

    $scope.CheckUser();
    $scope.logoutUser=function(){
        console.log("logout called");
        console.log(sessionService.destroy('uid'));
        $scope.CheckUser();
        $location.path("/login");
        $rootScope.Loged = false;

    };



});












