/* put your DOM code here */

// $(function() {
//     //create a new DOM element
//     var	img = $('<img src="images/art/thumbs/13030.jpg">');
//     //and now add the new element after the	panel
//     var	panel = $('.panel');
//     panel.after(img);
// });

// now using other methods on panel and img instead of after
$(function() {
    //create a new DOM element
    var	img = $('<img src="images/art/thumbs/13030.jpg">');
    //and now add the new element after the	panel
    var	panel = $('.panel');
    // panel.before(img);
    // panel.append(img);
    // img.appendTo(panel);
    // img.prependTo(panel);
    img.insertBefore(panel);
});
