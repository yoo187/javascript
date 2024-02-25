// Functie om de pagina te vernieuwen met AJAX
function refreshPage() {
    $.ajax({
        url: window.location.href, // URL van de huidige pagina
        type: 'GET',
        success: function(data) {
            var newContent = $(data).find('#blog-posts').html(); // Nieuwe inhoud van de #blog-posts div
            $('#blog-posts').html(newContent); // Bijwerken van de inhoud op de pagina
        },
        error: function() {
            console.log('Er is een fout opgetreden bij het vernieuwen van de pagina.');
        }
    });
}

// Vernieuw de pagina elke 30 seconden
setInterval(refreshPage, 30000); // 30000 milliseconden = 30 seconden