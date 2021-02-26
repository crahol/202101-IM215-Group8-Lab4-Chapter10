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
});