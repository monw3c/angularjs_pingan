/**
 * 电话框的directive
 */
define(['jquery','app'], function ($,app) {
  	app.directive('telBox', [function () {
		return {
			restrict: 'AE',
			replace:true,
            //transclude: true,
			templateUrl: "js/views/telBox.html",
			scope: {
		      show: '=',
		      tels: "="
		    },
			link: function (scope, ele, attr) {

            	var boxHeight = $('.telBox h4').height() + 84;
	            var top = $(window).height()/2 - boxHeight/2;
	            var left = $(window).width()/2 - 120;
	                    
	            $('.telBox').css({
	                        top: top,
	                        left: left,
	                        height: boxHeight
	            })

            	scope.hideModal = function() {
			        scope.show = false;
			    }
			
	            
			}	
		}
  }])

})