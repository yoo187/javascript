// Voeg een eventlistener toe voor klikgebeurtenissen op de <li> elementen
document.addEventListener('DOMContentLoaded', function () {
    var currentPage = window.location.pathname.split('/').pop(); // Haal de huidige pagina op
    var navLinks = document.querySelectorAll('header ul li');
    navLinks.forEach(function (link) {
        // Controleer of de href van de link overeenkomt met de huidige pagina
        if (link.querySelector('a').getAttribute('href') === currentPage) {
            link.classList.add('active'); // Voeg de 'active' klasse toe
        }
    });
});