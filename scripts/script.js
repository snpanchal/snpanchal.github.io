$(document).ready(function () {
    // Header
    $("#intro").hide().fadeIn(1500);

    $("#link-icon").click(function () {
        $("nav ul").toggleClass("open");
    });

    $("nav ul li").click(function () {
        $("nav ul").toggleClass("open");
    });

    // Smooth Scrolling
    $("#top-link").click(function (event) {
        event.preventDefault();

        $("html, body").animate({scrollTop: 0}, 500);
    });

    $("#site-sections a").click(function (event) {
        event.preventDefault();

        var href = $(this).attr("href");
        var hrefTop = $(href).offset().top;
        $("html, body").animate({scrollTop: hrefTop}, 800);
    });

    // Control fade of left-side navigation list
    var visible = false;
    $(window).scroll(function () {
        var headerBottom = $("header").offset().top + $("header").outerHeight();
        var currentTop = $(window).scrollTop();

        if (currentTop > headerBottom && !visible) {
            $("#basic-info").animate({"opacity": 1}, 500);
            visible = !visible;
        }
        else if (currentTop <= headerBottom && visible) {
            $("#basic-info").animate({"opacity": 0}, 500);
            visible = !visible;
        }
    });

});
