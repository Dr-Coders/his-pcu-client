/**
 * Created by Nirmal on 6/28/2017.
 */

app.factory("DiagnosisService",['$http',function ($http) {
    var baseURL = "http://localhost:8080/api/diagnosis/";

    return {
        getDiagnosis : function (patient_id) {
            return $http.get(baseURL+patient_id);
        },
        addDiagnosis : function (diagnosis) {
            return $http.post(baseURL,diagnosis);
        },
        updateDiagnosis : function (diagnosis_id,diagnosis) {
            return $http.put(baseURL + diagnosis_id,diagnosis);
        },
        deleteDiagnosis : function (diagnosis_id) {
            return $http.delete(baseURL + diagnosis_id);
        }
    };
}]);