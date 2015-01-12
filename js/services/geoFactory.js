/**
 * 取得实际位置
 * 调用方式：geoFactory.getGeo();
 */
define(['jquery','app'], function ($,app) {

    app.factory('geoFactory', ['$http','$q', function($http,$q) {
       
       function getGeo(){

                var def = $q.defer();

                var options = {
                      enableHighAccuracy: true,
                }

                navigator.geolocation.getCurrentPosition(function(position){
                  var pc = position.coords,
                      lat = pc.latitude,
                      lng = pc.longitude;

                  $http.jsonp('http://api.map.baidu.com/geoconv/v1/?coords='+lng+','+lat+'&from=1&to=5&ak=A226e59f9ee3bbbe0fcc35878b45787b&callback=JSON_CALLBACK').success(
                       function(data){
                           $http.jsonp('http://api.map.baidu.com/geocoder/v2/?ak=A226e59f9ee3bbbe0fcc35878b45787b&callback=?&location='+data.result[0].y+','+data.result[0].x+'&output=json&pois=0&callback=JSON_CALLBACK').success(function(result) {
                                  def.resolve(result);
                             })
                       }     
                  )
                  },function(error){
                  switch(error.code)
                  {
                  case error.PERMISSION_DENIED:
                    alert("请打开定位功能！")
                    break;
                  case error.POSITION_UNAVAILABLE:
                    alert("不支持定位服务！")
                    break;
                  case error.TIMEOUT:
                    alert("请求超时！")
                    break;
                  case error.UNKNOWN_ERROR:
                    alert("未知异常！")
                    break;
                  }
                },options)

              return def.promise;
       }
      

      return {

        getGeo : getGeo

      }

  }])

})
