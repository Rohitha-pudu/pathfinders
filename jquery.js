$(document).ready(function(){
    $("#firstquery").click(function(){
        $("#1").fadeToggle();
        $("#2").fadeToggle(1000);
        $("#3").fadeToggle(2000);
        $("#4").fadeToggle(3000);
    });
});