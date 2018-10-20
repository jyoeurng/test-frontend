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

// See me more button
$('.btn-see-more').on('click', function () {
    $("#menu a").each(function () {
        $(this).removeClass("active");
    });
    var $id = $(this).data("target");
    console.log($id);
    $($id).addClass("active");
    $(this).parents(".slide").remove();
});

// size window
function resize() {
    $(".slide").each(function() {
        var parallaxHeight = $(this).find(".parallax").height();
        var imgHeight = $(this).find("img").height();
		var $h;
		
		if (parallaxHeight > imgHeight) {
			$h = imgHeight;
		} else {
			$h = parallaxHeight;
		}
        console.log($h);
        $(this).height($h);
    });
}

$(window).on("resize", resize);
resize();