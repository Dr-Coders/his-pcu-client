/**
 * Created by Waruna on 6/29/2017.
 */
angular.module('Route')
.factory('registrationService',['$http',function($http){
    var baseURL ='localhost:8080/api/patient';

    return {
        savePatient:function (data) {
            console.log("calling the sevice")
            return $http.post(baseURL, data);
        },
        getpatient : function () {
            return $http.get(baseURL);
        }
    }
}]);