define(['app','telBox'], function(app){
      
    app.controller('wdxqCtrl', ['$scope','$rootScope','$http','$sce', function ($scope,$rootScope,$http,$sce) {
            
            $rootScope.headTitle = $rootScope.title = "网点详情";
            $rootScope.favBol = true;
            $rootScope.backBol = true;

            $http.get('./json/wdxq.json').
              success(function(data) {

                $scope.xq = data;

                $scope.myHTML = $sce.trustAsHtml($scope.xq.branch_remark);

                $scope.branchTel = $scope.xq.branch_tel;
                $scope.tels = $scope.branchTel.split(",");
                
              });

              $scope.boxShow = false;
              $scope.toggleShow = function() {
                    $scope.boxShow = !$scope.boxShow;
              };


        }])

})