/**
 * Created by Waruna on 6/29/2017.
 */

app.factory("LabtestService",['$http',function ($http) {
    var baseURL = "http://localhost:8080/api/labtest/";

    return {
        getLabtest : function () {
            return $http.get(baseURL);
        },
        addLabtest : function (labtest) {
            return $http.post(baseURL,labtest);
        },
        updateLabtest : function (labtest_id,labtest) {
            return $http.put(baseURL + labtest_id,labtest);
        },
        deleteLabtest : function (labtest_id) {
            return $http.delete(baseURL + labtest_id);
        }
    };
}]);