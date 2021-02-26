$(document).ready(function () {
    var form = $('#sliderBox form');
    $('#thumbBox').click(function (e) {
        if (e.target.nodeName == 'IMG') {

            var image = e.target;
            var imgSrc = image.src;
            var text = image.alt;
            var title = image.title;

            $('#imgManipulated img')[0].src = imgSrc.replace('small', 'medium');
            $('#imgManipulated figcaption')[0].innerHTML = '<em>' + text + '</em><br>' + title;

        }
    });


    form.on('change', function (e) {
        var prop = e.target;
        var img = $('#imgManipulated img');
        switch (prop.id.toLowerCase()) {
            case 'slideropacity':
                img.css('opacity', prop.value + '%');
                $('#numOpacity').html(prop.value);
                break;
            case 'slidersaturation':
                img.css('filter', 'saturate(' + prop.value + '%)');
                img.css('-webkit-filter', 'saturate(' + prop.value + '%)');
                $('#numSaturation').html(prop.value);
                break;
            case 'sliderbrightness':
                img.css('filter', 'brightness(' + prop.value + '%)');
                img.css('-webkit-filter', 'brightness(' + prop.value + '%)');
                $('#numBrightness').html(prop.value);
                break;
            case 'sliderhue':
                img.css('filter', 'hue-rotate(' + prop.value + 'deg)');
                img.css('-webkit-filter', 'hue-rotate(' + prop.value + 'deg)');
                $('#numHue').html(prop.value);
                break;
            case 'slidergray':
                img.css('filter', 'grayscale(' + prop.value + '%)');
                img.css('-webkit-filter', 'grayscale(' + prop.value + '%)');
                $('#numGray').html(prop.value);
                break;
            case 'sliderblur':
                img.css('filter', 'blur(' + prop.value + 'px)');
                img.css('-webkit-filter', 'blur(' + prop.value + 'px)');
                $('#numBlur').html(prop.value);
                break;
        }
    });
});