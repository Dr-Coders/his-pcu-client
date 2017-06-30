/**
 * Created by Nirmal on 6/29/2017.
 */

app.factory("PrescriptionService",['$http',function ($http) {
    var baseURL = "http://localhost:8080/api/prescription/";

    return {
        getPrescriptions : function () {
            return $http.get(baseURL);
        },
        getPrescription : function (prescription_id) {
            return $http.get(baseURL + prescription_id);
        },
        addPrescription : function (prescription) {
            return $http.post(baseURL,prescription);
        },
        updatePrescription : function (prescription_id,prescription) {
            return $http.put(baseURL + prescription_id,prescription);
        },
        deletePrescription : function (prescription_id) {
            return $http.delete(baseURL + prescription_id);
        }
    };
}]);