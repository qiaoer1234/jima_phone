Zepto(function ($) {
    
    var swiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop:true,
        pagination: {
            el: '.swiper-pagination',
        },
    })


    // 侧边导航淡入淡出
    const $mask = $('.mask'),
        $navbar = $('.navbar-wrapper'),
        $navbtn = $('.navbar-head .btn'),
        $navbtn2 = $('.navbar-head .btn2'),
        $popup = $('.popup-wrapper'),
        $selBlock = $('.down');
        $select = $('.down_dl'),
        $disappear = $('.navbar-ul1'),


        $('.sidebar-wrapper').tap(function () {
            openNav();
        })

    $mask.tap(function () {
        closeNav();
    })
    $navbtn.tap(function () {
        closeNav();
    })
    // 三级菜单展开
    $selBlock.tap(function () {
        openSel();
    })
    $navbtn2.tap(function () {
        closeSel();
    })


    function openNav() {
        addOvfHiden();
        $mask.show();
        $mask.animate({
            opacity: 1
        }, 200, 'ease-out');
        $navbar.animate({
            right: 0
        }, 200, 'ease-out');
    }

    function closeNav() {
        $select.removeClass('animate-left-slide');
        $popup.removeClass('animate-left-slide');
        removeOvfHiden();
        $navbar.animate({
            right: '-4.8rem'
        }, 200, 'ease-out');
        $mask.animate({
            opacity: 0
        }, 200, 'ease-out', function () {
            $mask.hide();
        });
    }

    function addOvfHiden() {
        $('html, body').addClass('ovfHiden');
    }

    function removeOvfHiden() {
        $('html, body').removeClass('ovfHiden');
    }

    // 委托购买弹窗
    $('.entrust').tap(function () {
        $navbar.animate({
            right: '-4.8rem'
        }, 200, 'ease-out');
        $popup.addClass('animate-left-slide');
    })

    $('.close-btn').tap(function () {
        $popup.removeClass('animate-left-slide');
        $mask.hide();
        removeOvfHiden();
    })



    function openSel() {
        $navbtn.hide();
        $navbtn2.show();
        $disappear.addClass('animate-l-hide-slide').removeClass('animate-l-show-slide');
        $select.addClass('animate-left-slide').removeClass('animate-right-slide');;
        return false;
    }
    function closeSel() {
        $navbtn.show();
        $navbtn2.hide();
        $disappear.addClass('animate-l-show-slide').removeClass('animate-l-hide-slide');
        $select.addClass('animate-right-slide').removeClass('animate-left-slide');;
        return false;
    }

// 新闻切换
    $(".in_news_ul li").tap(function(e){
        var index = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".in_news_con ul").eq(index).removeClass("hide").siblings().addClass("hide")
    });
    
// 关于我们切换
initTab = function ($navs, $conts, curClsName) {
    $navs.tap(function () {
        if ($(this).hasClass(curClsName)) {
            return false
        }
        $navs.removeClass(curClsName)
        $(this).addClass(curClsName)
        var _i = $navs.index($(this))
        $conts.removeClass(curClsName)
        $conts.eq(_i).addClass(curClsName)
    })
}


    $.fn.slideDown = function (duration) {    
      var position = this.css('position');
      this.show();
      this.css({
        position: 'absolute',
        visibility: 'hidden'
      });
      var height = this.height();
      this.css({
        position: position,
        visibility: 'visible',
        overflow: 'hidden',
        height: 0
      });
      this.animate({
        height: height+20
      }, duration);
    };

    $.fn.slideUp = function (duration) {    
        var position = this.css('position');
        this.show();
        this.css({
          position: 'absolute',
          visibility: 'hidden'
        });
        var height = this.height();
        this.css({
          position: position,
          visibility: 'visible',
          overflow: 'hidden',
          padding:0,
          height: height
        });
        this.animate({
          height: 0
        }, duration);
      };
// 诚聘英才折叠

        $('.li-tit').on('click',function(){
            if($(this).hasClass('on')){
                $(this).removeClass('on');
                $(this).siblings('.li-con').slideUp();
            }else{
                $(this).addClass('on');
                $(this).siblings('.li-con').slideDown();
            }
        });


})