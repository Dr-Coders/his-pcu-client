/**
 * Created by Nirmal on 5/1/2017.
 */
app.controller("pcuController", function ($scope, $http, $interval) {

    // $scope.TimedRefresh = function(t) {
    //     console.log(t);
    //     setTimeout("location.reload(true);", t*60);
    // }
    //
    // $scope.TimedRefresh(10);
    // $interval(getPrescriptions($scope,$http),5000);

    $scope.view = 1;

    $scope.changeview = function (view) {
        $scope.view = view;
    }

})
