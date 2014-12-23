/**
 * 路由
 */
define(['app'], function(app){
  
   return app.config(['$routeProvider',function($routeProvider) {
            $routeProvider
              .when('/', {
                templateUrl: 'js/views/wd/list.html',
                controller: 'wdListCtrl'
              })
              .when('/wdxq', {
                templateUrl: 'js/views/wd/xq.html',
                controller: 'wdxqCtrl'
              })
              .when('/sh', {
                templateUrl: 'js/views/sh/list.html',
                controller: 'shListCtrl'
              })
              .when('/shxq', {
                templateUrl: 'js/views/sh/xq.html',
                controller: 'shxqCtrl'
              })
              .when('/listimg', {
                templateUrl: 'js/views/sh/listimg.html',
                controller: 'listimgCtrl'
              })
              .when('/jr', {
                templateUrl: 'js/views/jr/list.html',
                controller: 'jrListCtrl'
              })
              .when('/lcxq', {
                templateUrl: 'js/views/jr/lcxq.html',
                controller: 'lcxqCtrl'
              })
              .when('/jjxq', {
                templateUrl: 'js/views/jr/jjxq.html',
                controller: 'jjxqCtrl'
              })
              .otherwise({ redirectTo: '/' });

              //$locationProvider.html5Mode(true).hashPrefix('!');

   }])
   
  
})