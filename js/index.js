$(document).ready(function() {
    $("#for-him").mouseover( () =>{
        $("#forhim").css("display", "flex");

    $(".shopping").css("background-color","#fff");
    $("#shoping").css("z-index", "50");
    $("#forhim").css("z-index", "1");
    $("#forher").css("z-index", "-1");
    $("#forbras").css("z-index", "-1");

});
    $(".nav").mouseover( () =>{
        $("#forhim").css("display", "none");
    $("#forher").css("display", "none");
    $("#forbras").css("display", "none");

    $(".shopping").css("background-color","transparent");
    $("#shoping").css("z-index", "0");


});
    $(".simple-slider").mouseover( () =>{
        $("#forhim").css("display", "none");
    $("#forher").css("display", "none");
    $("#forbras").css("display", "none");

    $(".shopping").css("background-color","transparent");
    $("#shoping").css("z-index", "0");


});

    $("#for-her").mouseover( () =>{
        $("#forher").css("display", "flex");

    $(".shopping").css("background-color","#fff");
    $("#shoping").css("z-index", "50");
    $("#forhim").css("z-index", "-1");
    $("#forher").css("z-index", "1");
    $("#forbras").css("z-index", "-1");

});
    $("#for-bras").mouseover( () =>{
        $("#forbras").css("display", "flex");

    $(".shopping").css("background-color","#fff");
    $("#shoping").css("z-index", "50");
    $("#forbras").css("z-index", "1");
    $("#forhim").css("display", "none");
    $("#forher").css("display", "none");

});


});