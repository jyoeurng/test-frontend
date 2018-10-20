// Function to resize slide for responsive design
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
        $(this).height($h);
    });
}

// Call function on resize
$(window).on("resize", resize);
// Call function on init
resize();