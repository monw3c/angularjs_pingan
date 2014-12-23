/**
 * idtab的directive
 */
define(['jquery','app','idTabs'], function ($,app,idTabs) {
  	app.directive('jrTab', [function () {
		return {
			restrict: 'AE',
			link: function (scope, ele, attr) {

		        $("#tabs-list ul").idTabs();
	            
			}	
		}
  }])

})