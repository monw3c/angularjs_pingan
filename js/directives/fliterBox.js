/**
 * 商户页筛选框
 * 调用方式：<fliter-box></fliter-box> 或 <div fliter-box></div>;
 */
define(['jquery','app'], function ($,app) {
    app.directive('fliterBox', ['$timeout',function ($timeout) {
    return { 
      restrict: 'AE',
      link:function(scope, element, attrs){

            function render(){
              $timeout(function () { 
                    $(element).css("width",$(element).parent().width()+2)
                    $(".fliter-box b").on('click',function(event) {
                      event.stopPropagation();
                      $(this).children(".menu").slideDown('fast').end().siblings('b').children(".menu").slideUp('fast');
                    });

                    $(".menu li").on('click',function(event) {
                      event.stopPropagation();
                      $(this).parent().slideUp('fast');
                      $(this).parent().parent().find('span').text($(this).text())
                    });

                    $("html").on('click',function() {
                      $(".menu").slideUp('fast');
                    });

                    $(".fliter-box b").each(function(i, e) {
                      $(e).find('span').text($(e).find("li").eq(0).text())
                    });
                }, 0, false);
            }

            //接收数据加载完成信号
            scope.$on('dataloaded', function () {
               render() 
            })
         

         $(window).resize(function() {
            render()
          })

      }              
    }
  }])

})
