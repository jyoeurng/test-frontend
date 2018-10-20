// Manage parallax positioning on scroll
$(window).scroll(function () {
    scroll = $(window).scrollTop();
    $('.parallax').each(function () {
        if ($(this).offset().top < $(window).scrollTop()) {
            var difference = $(window).scrollTop() - $(this).offset().top;
            var half = (difference / 2) + 'px';
            $(this).find('img').css('top', half);
        } else {
            $(this).find('img').css('top', '0');
        }
    });
});