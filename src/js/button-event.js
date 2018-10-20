// See me more button
$('.btn-see-more').on('click', function () {
    $("#menu a").each(function () {
        $(this).removeClass("active");
    });
    var $id = $(this).data("target");
    $($id).addClass("active");
    $(this).parents(".slide").remove();
});