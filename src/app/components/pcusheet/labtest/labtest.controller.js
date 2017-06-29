/**
 * Created by Waruna on 6/29/2017.
 */
angular.module('Route')
    .controller('labtestController', function($scope,$http,LabtestService) {
        $scope.view = 1;

        $scope.changeview = function (view) {
            $scope.view = view;
        }
    })