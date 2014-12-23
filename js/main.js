/**
 * 入口文件
 * 2014-11-30 mon
 */
require.config({
    baseUrl: "js/",
    paths: {
      "jquery": "libs/jquery203",
      "fastclick" : "libs/fastclick",
      "blocksit" : "libs/blocksit",
      "idTabs" : "libs/idTabs",
      "angular" : "libs/angular.min",
      "angular-route" : "libs/angular-route.min",
      "angular-sanitize" : "libs/angular-sanitize.min",

      "telBox" : "directives/telBox",
      "fav" : "directives/fav",
      "imgList" : "directives/imgList",
      "geo" : "directives/geo",
      "backButton" : "directives/backButton",
      "fliterBox" : "directives/fliterBox",
      "jrTab" : "directives/jrTab",
      
      "geoFactory" : "services/geoFactory",

      "app" : "controllers/app",
      "loadingInterceptor" : "controllers/loadingInterceptor",
      "wdListCtrl" : "controllers/wdListCtrl",
      "wdxqCtrl" : "controllers/wdxqCtrl",
      "shxqCtrl" : "controllers/shxqCtrl",
      "shListCtrl" : "controllers/shListCtrl",
      "listimgCtrl" : "controllers/listimgCtrl",
      "jrListCtrl" : "controllers/jrListCtrl",

      "route" : "routes/appRoute",
    },
    shim: {
       'angular': {
          exports: 'angular'
       },
       'angular-route':{
          deps: ["angular"],
          exports: 'angular-route'
       },
       'angular-sanitize':{
          deps: ["angular"],
          exports: 'angular-sanitize'
       },
       'blocksit':{
          deps: ["jquery","angular"],
          exports: 'blocksit'
       },
       'idTabs': {
          deps: ['jquery'],
          exports: 'idTabs'
       }
    }
});


require(['jquery','angular','angular-route','angular-sanitize','app','loadingInterceptor','route','telBox','fav','geo','geoFactory','wdListCtrl','wdxqCtrl','shxqCtrl','shListCtrl','listimgCtrl','jrListCtrl','blocksit','backButton','fliterBox','idTabs','jrTab'],function ($,angular){

      $(function () {

            angular.bootstrap(document,["pinganApp"]);

      })

});