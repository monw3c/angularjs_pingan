/**
 * 定位功能
 * 调用方式：<geo></geo> 或 <div geo></div>;
 */
define(['jquery','app','geoFactory'], function ($,app,geoFactory) {
    app.directive('geo', ['geoFactory',function (geoFactory) {
    return {
      restrict: 'AE',
      replace: true,
      //transclude: true,
      templateUrl: "js/views/geo.html",
      scope: {
        refresh: "&"
      },
      link:function(scope, element, attrs){

         function getGeo(){
            $(".geo").text("正在定位...");
            geoFactory.getGeo()
                    .then(function(re) {
                      $(".geo").text(re.result.formatted_address);
            });
         }
        
         getGeo()

         scope.refresh = function(){
            getGeo()
         }

      }              
    }
  }])

})
