define(['app'], function(app){
      
   return app.controller('jrListCtrl', ['$scope','$rootScope','$http', function ($scope,$rootScope,$http) {

            $rootScope.headTitle = $rootScope.title = "金融超市";
            $rootScope.favBol = false;
            $rootScope.backBol = true;

            $scope.getMore = function(){
              angular.element('.list-box ul').append('<p>1111111111111111111111</p>')
            }

            $http.get('./json/jrcslc.json').
              success(function(data) {
                
                $scope.financials = data.financials;

              });

            $http.get('./json/jrcsjj.json').
              success(function(data) {

                $scope.funds = data.funds;

              });

    }])

})