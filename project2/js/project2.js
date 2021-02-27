$(document).ready(function () {
    var gallery = $('ul.gallery');
    for (var i = 0; i < images.length; i++) {
        var img = document.createElement('img');
        img.src = 'images/square/' + images[i].path;
        img.alt = images[i].description;
        img.title = images[i].title;
        gallery[0].appendChild(img);
    }

    $(function () {
        $('ul.gallery img').on('mouseover', function(e) {

        });

        $("ul.gallery img").on("mouseleave", deletePreview);
        $("ul.gallery img").on("mousemove", shiftPreview);
    });

    function deletePreview(e) {
    }

    function shiftPreview(e) {
    }
});
