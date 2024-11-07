// Animation de fuite des élements de présentation (name, ...)

document.querySelectorAll('.container div').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left; // Position X dans l'élément
        const y = e.clientY - rect.top;  // Position Y dans l'élément
        const moveX = (x - rect.width / 2) / 20; // Ajuster ici pour adoucir
        const moveY = (y - rect.height / 2) / 20; // Ajuster ici pour adoucir

        item.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transition = 'transform 0.5s ease-out'; // Transition douce pour le retour
        item.style.transform = 'translate(0, 0)';

        // Après la transition, on enlève la propriété transition pour que le mouvement reste fluide
        setTimeout(() => {
            item.style.transition = '';
        }, 500); // Correspond à la durée de la transition
    });
});


// Animation d'activation des box du carousel 


document.querySelectorAll('.box-carrousel').forEach(box => {
    box.addEventListener('click', () => {
        // Retirer la classe active de la div actuellement active
        document.querySelector('.box-carrousel.active').classList.remove('active');
        
        // Ajouter la classe active à la div cliquée
        box.classList.add('active');
    });
});

// Animation arrivé carousel au chargement de la page

window.addEventListener('load', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const boxes = document.querySelectorAll('.box-carrousel');

    // Ajouter un délai de 1 seconde avant de commencer l'animation
    setTimeout(() => {
        // Rendre le conteneur visible après le délai
        carouselContainer.style.opacity = '1';

        // Transition pour chaque box
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            }, index * 300); // Décalage de 200ms entre les box
        });
    }, 600); // Délai de 1 seconde (1000 ms)
});



// Carroussel des projets

document.addEventListener("DOMContentLoaded", function() {
    // Objets pour stocker l'index de chaque carrousel
    const carousels = document.querySelectorAll('.project-carousel-section');
    let carouselIndices = {}; // Stocke l’index courant de chaque carrousel

    carousels.forEach((carousel, index) => {
        carouselIndices[index + 1] = 0; // Initialise chaque carrousel à l’image 0
    });

    // Affiche l'image pour un carrousel spécifique
    function showImage(carouselId, index) {
        const slides = document.querySelectorAll(`#carousel-${carouselId} .project-carrousel-box`);
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Image suivante
    window.nextImage = function(carouselId) {
        const slides = document.querySelectorAll(`#carousel-${carouselId} .project-carrousel-box`);
        carouselIndices[carouselId] = (carouselIndices[carouselId] + 1) % slides.length;
        showImage(carouselId, carouselIndices[carouselId]);
    }

    // Image précédente
    window.prevImage = function(carouselId) {
        const slides = document.querySelectorAll(`#carousel-${carouselId} .project-carrousel-box`);
        carouselIndices[carouselId] = (carouselIndices[carouselId] - 1 + slides.length) % slides.length;
        showImage(carouselId, carouselIndices[carouselId]);
    }

    // Initialiser chaque carrousel à la première image
    Object.keys(carouselIndices).forEach(carouselId => {
        showImage(carouselId, carouselIndices[carouselId]);
    });
});
