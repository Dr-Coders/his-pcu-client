/**
 * Created by Nirmal on 6/29/2017.
 */

app.factory("PatientService",['$http',function ($http) {
    var baseURL = "http://localhost:8080/api/patient/";

    return {
        getPatients : function () {
            return $http.get(baseURL);
        },
        addPatient : function (patient) {
            return $http.post(baseURL,patient);
        },
        updatePatient : function (patient_id,patient) {
            return $http.put(baseURL + patient_id,patient);
        },
        deletePatient : function (patient_id) {
            return $http.delete(baseURL + patient_id);
        },
        getPatient : function (patient_id) {
            return $http.get(baseURL+patient_id);
        }
    };
}]);