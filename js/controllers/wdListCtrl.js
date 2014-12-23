define(['app','geoFactory'], function(app,geoFactory){
      
   return app.controller('wdListCtrl', ['$scope','$rootScope','$http','geoFactory', function ($scope,$rootScope,$http,geoFactory) {

            $rootScope.headTitle = $rootScope.title = "营业网点";
            $rootScope.favBol = false;
            $rootScope.backBol = false;

            $scope.getMore = function(){
              angular.element('.list-box ul').append('<p>1111111111111111111111</p>')
            }

            $http.get('./json/yywd.json').
              success(function(data) {

                $scope.branchs = data.branchs;
                
              });

        }])

})