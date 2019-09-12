
    $(function () {
        $(".menu ul li").hover(function () {
            $(this).children(".nav").stop().slideDown()
        }, function () {
            $(this).children(".nav").stop().slideUp()
        })

        $('#dl-menu').dlmenu();

        $('.gotop').toTop({
            position: false
        });
    });

    $(document).ready(function () {
        $(".owl-banner").owlCarousel({
            items: 1, // 一屏看到的图片数量
            loop: true, // 循环滚动
            pagination: true,
            autoplay: true, // 自动播放
            autoplayTimeout: 5000, // 时间间隔
            autoplayHoverPause: true //鼠标放在图片上暂停滚动
        });
    });

    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        new WOW().init();
    };

    $( window ).scroll(function() {
        if($(this).scrollTop() > $('.header').height()) {
            $(".header").addClass("sticky")
        } else {
            $(".header").removeClass("sticky")
        }
    });


