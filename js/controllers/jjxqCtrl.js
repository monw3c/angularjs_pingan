define(['app'], function(app){
      
   return app.controller('jjxqCtrl', ['$scope','$rootScope','$http', function ($scope,$rootScope,$http) {

            $rootScope.headTitle = $rootScope.title = "基金详情";
            $rootScope.favBol = false;
            $rootScope.backBol = true;

            $http.get('./json/jjxq.json').
              success(function(data) {
                
                $scope.jj = data;
                $scope.$emit('dataloaded');//发送器
              });


    }])

})