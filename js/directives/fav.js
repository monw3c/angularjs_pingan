/**
 * 收藏按钮的directive
 */
define(['jquery','app'], function ($,app) {
  	app.directive('favBtn', [function () {
		return {
			restrict: 'AE',
			replace: true,
            //transclude: true,
            template: '<a href="javascript:void(0)" class="btn-fav" ng-show="favBol"><span></span></a>',
			/*scope: {
		      show: '='
		    },*/
			link: function (scope, ele, attr) {

				$(ele).bind("click", function(){
					$(this).toggleClass('btn-fav-select')
				})
	            
			}	
		}
  }])

})
