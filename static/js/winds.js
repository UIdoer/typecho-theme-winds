console.log(" %c WINDS %c https://github.com/kaygb/typecho-theme-winds/ ", "color: #000; background: pink; padding:5px;", "background: #fff; padding:5px;"),

    // 代码高亮
    hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad();

//初始化
$(document).ready(function() {
    // 初始化highlightjs
    $('code.hljs').each(function(i, block) {
        hljs.lineNumbersBlock(block);
    });
    // 初始化fancybox
    $(".fancybox").fancybox();

    // 导航栏分类
    $(".winds-category-menu-item").css("display", "none");
    $(".winds-category-menu").mouseover(function() {
        $(".winds-category-menu-item").css("display", "flex");
    });
    $(".winds-category-menu").mouseout(function() {
        $(".winds-category-menu-item").css("display", "none");
    });
});

// 表格样式
$('table').addClass('table table-hover table-bordered text-muted');
$('thead').addClass('thead-dark');

// 分页导航

$('#w-pagination ol').addClass('pagination');
$('#w-pagination ol li').addClass('page-item');
$('#w-pagination ol li a').addClass('page-link bg-white text-dark');
$('#w-pagination .current a').removeClass('bg-white text-dark');
$('#w-pagination .current a').addClass('active bg-dark text-white');


// 评论回复按钮

$('.comment-reply a').addClass('btn btn-success');

// 链接跳转新页面

$('#main-post a').attr('target', '\"_blank\"');

// lazyload
window.onload = function() {
    $('#main-post img').addClass('lazyload');
    $(function() {
        $("img.lazyload").lazyload({
            effect: 'fadeIn'
        });
    });

    $("img.lazy-img").lazyload({
        effect: 'fadeIn'
    });
}

//tab组
$('#tabs').tabulous({
    effect: 'scale'
});

// sidebar
$(function() {
    $(window).scroll(function() {
        if ($(window).width() > 1000) {
            //获取垂直滚动的距离
            let profileTop = $(".main").offset().top - $(window).scrollTop();
            // console.log(profileTop);
            // var scrollTop = $(document).scrollTop();
            if (profileTop < 150) {
                $(".profile").css({ "top": "150px", "position": "fixed" });
                // $(".blur-nav-bg").css({ "display": "inherit" });
                // $(".blur-nav").css({ "display": "inherit" });
                $(".blur-nav-bg").fadeIn();
                $(".blur-nav").fadeIn();
            } else {
                $(".profile").css({ "top": "inherit", "position": "" });
                // $(".blur-nav-bg").css({ "display": "none" });
                // $(".blur-nav").css({ "display": "none" });
                $(".blur-nav-bg").fadeOut();
                $(".blur-nav").fadeOut();
            }
        } else {
            $(".blur-nav-bg").css({ "display": "inherit" });
            $(".blur-nav").css({ "display": "inherit" });
        }

    });
});

//移动端导航

$(".winds-mb-menu").click(function() {
    // $(".mobile-menu").css({ "display": "block" });
    $(".mobile-menu").fadeIn();

    $(".winds-mb-menu-f").css({ "display": "inherit" });
    $(".winds-mb-menu ").css({ "display": "none" });
    $(".back-to-top ").css({ "z-index": "100" });
});
$(".winds-mb-menu-f").click(function() {
    // $(".mobile-menu").css({ "display": "none" });
    $(".mobile-menu").fadeOut();
    $(".winds-mb-menu-f").css({ "display": "none" });
    // $(".winds-mb-menu-f").fadeOut();;
    $(".winds-mb-menu").css({ "display": "inherit" });


});
$(".wind-other a").addClass("col-6");