
$(document).ready(function(){
    // Voeg de klasse 'active' toe aan de huidige pagina in de navigatiebalk
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    $('header ul li a').each(function(){
        var href = $(this).attr('href');
        if(filename == href){
            $(this).addClass('active').highlight();
        }
    });
});
