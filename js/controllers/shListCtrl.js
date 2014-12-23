define(['app','geoFactory'], function(app,geoFactory){
      
   return app.controller('shListCtrl', ['$scope','$rootScope','$http','geoFactory', function ($scope,$rootScope,$http,geoFactory) {

            $rootScope.headTitle = $rootScope.title = "商户列表";
            $rootScope.favBol = false;
            $rootScope.backBol = false;

            $scope.getMore = function(){
              angular.element('.list-box ul').append('<p>1111111111111111111111</p>')
            }

            $http.get('./json/sp.json').
              success(function(data) {

                $scope.shops = data.shops;
                $scope.areas = data.areas;
                $scope.types = data.types;
                $scope.orders = data.orders;
                $scope.$emit('dataloaded');//发送数据加载完成信号
              });

    }])

})