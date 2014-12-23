/**
 * 建立angular.module
 */
define(['angular'], function (angular) {
    var app = angular.module('pinganApp', ['ngRoute','ngSanitize','ajaxLoading']);
    
    return app;

});
