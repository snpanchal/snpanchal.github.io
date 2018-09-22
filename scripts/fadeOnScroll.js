function fadeInOnScroll(sectionSelector) {
    $(window).scroll(function () {
        $(sectionSelector).each(function (i) {
            var objectBottom = $(this).position().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > objectBottom) {
                $(this).animate({"opacity": 1}, 400);
            }
        });
    });
}
