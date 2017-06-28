/**
 * Created by Nirmal on 4/29/2017.
 */
var app = angular.module("Route", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "components/home/home.html"
            })
            .when("/index.html", {
                templateUrl: "components/home/home.html"
            })
            .when("/pcusheet/admission", {
                templateUrl: "components/pcusheet/addmission/admission.html",
                controller: "admissionController"
            })
            .when("/pcusheet/addprescription", {
                templateUrl: "components/pcusheet/diagnosis/addprescription.html",
                controller:"pcuController"
            })
            .when("/registration", {
                templateUrl: "./components/registration/registration.html"
            })
            .when("/pcusheet", {
                templateUrl: "./components/pcusheet/pcusheet.html",
                controller : "pcuController"
            })
            .when("/search", {
                templateUrl: "./components/searchpatient/searchpatient.html"
            })
            .when("/pcusheet/addlabtest", {
                templateUrl: "components/pcusheet/labtest/addlabtest.html"
            })


            // .when("/pagenotfound", {
            //     templateUrl: "pages/error/404.html"
            // })
            .otherwise({redirectTo: '/'})
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })