/**
 * fixBar的directive
 * <div fix-bar></div>
 */
define(['jquery','app','stickUp'], function ($,app,stickUp) {
  	app.directive('fixBar', ['$timeout',function ($timeout) {
		return {
			restrict: 'AE',
			link: function (scope, ele, attr) {

	            //接收器
	            scope.$on('dataloaded', function () {
	               $timeout(function () { 
	                    $('.navbar-wrapper').stickUp();
	                }, 0, false);
	            })
	            
			}	
		}
  }])

})