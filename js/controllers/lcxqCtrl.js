define(['app'], function(app){
      
   return app.controller('lcxqCtrl', ['$scope','$rootScope','$http', function ($scope,$rootScope,$http) {

            $rootScope.headTitle = $rootScope.title = "产品详情";
            $rootScope.favBol = false;
            $rootScope.backBol = true;

            $http.get('./json/lcxq.json').
              success(function(data) {
                
                $scope.lc = data;

              });


    }])

})