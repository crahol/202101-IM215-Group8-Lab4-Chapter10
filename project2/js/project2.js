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
        $('ul.gallery img').on('mouseover', function (e) {
            var alt = $(this).attr('alt');

            var text;
            for (var i = 0; i < images.length; i++) {
                if (alt == images[i].description) {
                    var title = images[i].title;
                    var city = images[i].city;
                    var country = images[i].country;
                    var date = images[i].taken;

                    text = title + '<br>' + city + ', ' + country + ' [' + date + ']';

                }
            }
            var src = $(this).attr('src');
            var newsrc = src.replace("square", "medium");
            var preview = $('<div id="preview"></div>');
            var image = $('<img	src="' + newsrc + '">');
            var caption = $('<p>' + text + '</p>');
            preview.append(image);
            preview.append(caption);
            $('body').append(preview);
            $(this).addClass("gray");
            $("#preview").show();
        });
    });

    $("ul.gallery img").on("mouseleave", deletePreview);
    $("ul.gallery img").on("mousemove", shiftPreview);
});

function deletePreview(e) {
}

function shiftPreview(e) {
}
});
