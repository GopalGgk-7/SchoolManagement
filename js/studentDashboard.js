
var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    console.log('--------check----->>>>');

    $routeProvider
            .when("/", {
                templateUrl: "Home.html"
            })
            .when("/Menu1", {
                templateUrl: "Menu1.html",
                controller: "menu1Ctrl"
            })
            .when("/Menu2", {
                templateUrl: "Menu2.html",
                controller: "menu2Ctrl"
            })
            .when("/about", {
                templateUrl: "about.html"
            })
            .when("/contact", {
                templateUrl: "contact-us.html"
            });

});