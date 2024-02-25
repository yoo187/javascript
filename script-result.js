$(document).ready(function(){
    $('#blogForm').submit(function(e){
        e.preventDefault(); // Voorkom dat het formulier wordt verzonden
        var title = $('#title').val();
        var content = $('#content').val();
        var resultHtml = '<div class="mb-3"><h2>' + title + '</h2><p>' + content + '</p></div>';
        $('#result').append(resultHtml);
        // Optioneel: leeg de invoervelden na toevoegen aan resultaat
        $('#title').val('');
        $('#content').val('');
    });
});