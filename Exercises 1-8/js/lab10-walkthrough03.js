/* try the different advanced selection calls here */
// setting bg color to yellow for type password
$(':password').css('background-color', 'yellow');

// change color of every fourth child
$('form	:nth-child(4n)').css('background-color', 'yellow');

// select all labels with "word" inside and turn black
$('label:contains("word")').css("color", "black");
