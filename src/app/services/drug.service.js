/**
 * Created by Nirmal on 7/1/2017.
 */

app.factory("DrugService",['$http',function ($http) {
    var baseURL = "http://localhost:8080/api/drug/";

    return {
        getDrugs : function () {
            return $http.get(baseURL);
        },
        addDrug : function (drug) {
            return $http.post(baseURL,drug);
        },
        updateDrug : function (drug_id,drug) {
            return $http.put(baseURL + drug_id,drug);
        },
        deleteDrug : function (drug_id) {
            return $http.delete(baseURL + drug_id);
        }
    };
}]);