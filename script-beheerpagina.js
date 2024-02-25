$(document).ready(function(){
    $("form[name='blogForm']").submit(function(event) {
        var title = $("#title").val();
        var content = $("#content").val();
        if (title === "" || content === "") {
            alert("Alle velden moeten worden ingevuld!");
            event.preventDefault();
        }
    });
});
