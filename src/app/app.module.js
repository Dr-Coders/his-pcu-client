/**
 * Created by Nirmal on 4/29/2017.
 */
var app = angular.module("Route", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "pages/home.html"
            })
            .when("/index.html", {
                templateUrl: "components/home/home.html"
            })
            .when("/pcusheet/admission", {
                templateUrl: "components/pcusheet/pcusheet/admission.html",
                controller: "admissionController"
            })
            .when("/pcusheet/addprescription", {
                templateUrl: "pages/pcusheet/addprescription.html",
                controller:"pcuController"
            })
            .when("/registration", {
                templateUrl: "pages/registration.html"
            })
            .when("/pcusheet", {
                templateUrl: "pages/pcusheet/pcusheet.html",
                controller : "pcuController"
            })
            .when("/search", {
                templateUrl: "pages/searchpatient.html"
            })
            .when("/pcusheet/addlabtest", {
                templateUrl: "pages/pcusheet/addlabtest.html"
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