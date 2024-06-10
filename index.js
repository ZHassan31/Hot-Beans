$(document).ready(function(){
    $("#firstImage").click(function(){
        $("#firstTextBox").slideToggle(1000);
        $("#firstTextBio").show().animate({opacity:'1'},4000);

    });

    $("#secondImage").click(function(){
        $("#secondTextBox").slideToggle(1000);
        $("#secondTextBio").show().animate({opacity:'1'},4000);

    });
    $("#thirdImage").click(function(){
        $("#thirdTextBox").slideToggle(1000);
        $("#thirdTextBio").show().animate({opacity:'1'},4000);

    });
    $("#fourthImage").click(function(){
        $("#fourthTextBox").slideToggle(1000);
        $("#fourthTextBio").show().animate({opacity:'1'},4000);

    });
});