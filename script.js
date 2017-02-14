/* global $ */

$(document).ready(function() {

    $("button").click(function() {
        var word = $("input").val();
        if (word === "pizza") {
            $(" h1").html(" Congrats!!!!");
        }
        else if(word === "pie"){
            $("h1").html("You Are Close...Or Not");
        }
        else {
            $(" h1").html(" Hint: It is a food");

        }
    });

});
