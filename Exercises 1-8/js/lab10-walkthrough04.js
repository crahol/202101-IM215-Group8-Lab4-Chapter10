/* put your event code here */

// $(".panel").click(function()	{
//     $("#message").html("You	clicked	in	the	panel");
// });


// $(".panel").on("click",	function()	{
//     $("#message").html("You	clicked	in	the	panel");
// });


// $(function	()	{
//     $(".panel").on("click",	function()	{
//         $("#message").html("You	clicked	in	the	panel");
//     });
// });


//it will display x and y value if moving mouse to the panel 
// it will say good bye! if leave box
// it will say stopped move reporting if user clicks on panel 
$(function () {
    $(".panel")
        .on("mousemove",function (e) {
            $("#message").html("x="	+ e.pageX +	" y=" +	e.pageY);
        })
        .on("mouseleave",function (e) {
            $("#message").html("goodbye!");
        })
        .on("click",function() {
            $("#message").html("stopped	move reporting");
            $(".panel").off("mousemove");
        });		
});	