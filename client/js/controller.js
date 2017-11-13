angular.module("portfolioApp.controllers", [])
    .controller("mainCtrl", function($scope){})

    .controller("getProjectCtrl", function($scope, $http){
    	$http.get("/api/portfolio")
    	.then(function(response){
            console.log(response.data)
            $scope.post = response.data
    	})
    })
    .controller("projectCtrl", function($scope, $http, $stateParams){
        $http.get("/api/project/:id", {params :{id:$stateParams.projId}})
        .then(function(response){
            console.log(response.data)
            $scope.post = response.data
        })
    })

    .controller("createCtrl", function($scope, Upload, $http, $state){
    })
    	

    .controller("updateCtrl", function($scope, $http, $window, $location){
        // var p = $location.search().p

        // $scope.deletePost = function(){
        //     $http.delete('api/delete/:id', {params :{id: p}})
        //     .then(function(response){
        //         console.log("delete success")
        //         $window.location.href='/'
        //     })
        // }

        // $scope.editPost = function(){
        //     $http.put('/api/update/:id', $scope.post, {params :{id: p}})
        //     .then(function(response){
        //         $window.location.href='/'
        //         console.log("coolio")
        //     }), function(response){
        //         console.log("fail")
        //     }
        // }

    })