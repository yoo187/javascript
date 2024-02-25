$(document).ready(function(){
    $(".bio-btn").click(function(){
        var bioId = $(this).data("bio");
        $("#" + bioId + "-bio").slideToggle();
        $(this).toggleClass("active"); // Toevoegen/verwijderen van actieve klasse voor biobak
    });
});