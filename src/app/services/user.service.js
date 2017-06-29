/**
 * Created by Nirmal on 6/29/2017.
 */

app.factory("UserService",['$http',function ($http) {
    var baseURL = "http://localhost:8080/api/user/";

    return {
        getUser : function () {
            return $http.get(baseURL);
        },
        addUser : function (user) {
            return $http.post(baseURL,user);
        },
        updateUser : function (user_id,user) {
            return $http.put(baseURL + user_id,user);
        },
        deleteUser : function (user_id) {
            return $http.delete(baseURL + user_id);
        }
    };
}]);