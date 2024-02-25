// JavaScript om tussen de afbeeldingen in de class "outfits" te schakelen
let currentImageIndex = 0;
const outfitsImages = document.querySelectorAll('.outfits');
const outfitImage = document.getElementById('outfit-image');

function showNextImage() {
    // Verberg de huidige afbeelding
    outfitsImages[currentImageIndex].style.display = 'none';
    // Verhoog de index en controleer op overflow
    currentImageIndex = (currentImageIndex + 1) % outfitsImages.length;
    // Laat de volgende afbeelding zien
    outfitsImages[currentImageIndex].style.display = 'block';
}

function showPreviousImage() {
    // Verberg de huidige afbeelding
    outfitsImages[currentImageIndex].style.display = 'none';
    // Verminder de index en controleer op overflow
    currentImageIndex = (currentImageIndex - 1 + outfitsImages.length) % outfitsImages.length;
    // Laat de vorige afbeelding zien
    outfitsImages[currentImageIndex].style.display = 'block';
}

// Zorg ervoor dat bij het laden van de pagina een afbeelding zichtbaar is
window.addEventListener('DOMContentLoaded', function() {
    // Laat de eerste afbeelding in de outfits-klasse zien
    outfitsImages[currentImageIndex].style.display = 'block';
});