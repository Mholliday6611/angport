angular.module("portfolioApp", ["ui.router", "portfolioApp.controllers"])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state("index", {
                url: "/",
                templateUrl: "/templates/home.html",
                controller: "getProjectCtrl",
                abstract: true
            })
            .state("index.bio",{
                url: "",
                templateUrl: "/templates/bio.html"
            })
            .state("index.project",{
                url:":projId",
                templateUrl: "/templates/projectInfo.html",
                controller: "projectCtrl"
            })
            .state("createProject",{
                url: "/create",
                templateUrl: "/templates/create.html",
                controller: "createCtrl"
            })
            .state("updateProject", {
                url: "/update",
                templateUrl: "/templates/edit.html",
                controller: "updateCtrl"
            });

        $urlRouterProvider.otherwise("/")
    })