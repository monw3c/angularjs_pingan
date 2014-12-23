define(['app','telBox'], function(app){
      
    app.controller('shxqCtrl', ['$scope','$rootScope','$http','$sce', function ($scope,$rootScope,$http,$sce) {
            
            $rootScope.headTitle = $rootScope.title = "商户详情";
            $rootScope.favBol = true;
            $rootScope.backBol = true;

            $http.get('./json/shxq.json').
              success(function(data) {

                $scope.xq = data;
                
                $scope.myHTML = $sce.trustAsHtml($scope.xq.shop_remark);
                
                $scope.branchTel = $scope.xq.shop_tel;
                $scope.tels = $scope.branchTel.split(",");
                //console.log($scope.xq.branch_tel.split(","))  
                
              });

              $scope.boxShow = false;
                  $scope.toggleShow = function() {
                    $scope.boxShow = !$scope.boxShow;
              };
        }])

})