/**
 * Created by Nirmal on 6/28/2017.
 */
app.controller('appController',function ($scope) {
    $scope.logoutUser=function(){
        console.log("logout called");
        console.log(sessionService.destroy('uid'));
        $scope.CheckUser();
    };
    $scope.mess = "hello app controller";
});