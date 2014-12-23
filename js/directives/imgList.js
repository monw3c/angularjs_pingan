/**
 * 瀑布流 jquery插件blocksit的directive
 */
define(['jquery','app','blocksit'], function ($,app,Blocksit) {
  	app.directive('imgList', [function () {
		return {
			restrict: 'AE',
			link: function (scope, ele, attr) {

		        angular.element('img').on('load', function () {
				    $('#container').BlocksIt({
						numOfCol: 2,
						offsetX: 3,
						offsetY: 3,
						blockElement: '.grid'
					})
				})
	            
			}	
		}
  }])

})