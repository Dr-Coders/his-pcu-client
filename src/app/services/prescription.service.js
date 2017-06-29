/**
 * Created by Nirmal on 6/29/2017.
 */

app.factory("PrescriptionService",['$http',function ($http) {
    var baseURL = "http://localhost:8080/api/prescription/";

    return {
        getPrescription : function () {
            return $http.get(baseURL);
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