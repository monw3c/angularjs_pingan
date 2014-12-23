/**
 * 返回功能
 * 调用方式：<a href back-button>back</a>;
 */
define(['app'], function (app) {
    app.directive('backButton', ['$window',function ($window) {
    return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    $window.history.back();
                });
            }             
    }
  }])

})
