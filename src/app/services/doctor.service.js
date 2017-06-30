/**
 * Created by Nirmal on 6/29/2017.
 */

app.factory("DoctorService",['$http',function ($http) {
    var baseURL = "http://localhost:8080/api/doctor/";

    return {
        getDoctors : function () {
            return $http.get(baseURL);
        },
        addDoctor : function (doctor) {
            return $http.post(baseURL,doctor);
        },
        updateDoctor : function (doctor_id,doctor) {
            return $http.put(baseURL + doctor_id,doctor);
        },
        deleteDoctor : function (doctor_id) {
            return $http.delete(baseURL + doctor_id);
        }
    };
}]);