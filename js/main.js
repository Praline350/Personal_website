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

document.querySelectorAll('.box-carrousel').forEach(box => {
    box.addEventListener('click', () => {
        // Retirer la classe active de la div actuellement active
        document.querySelector('.box-carrousel.active').classList.remove('active');
        
        // Ajouter la classe active à la div cliquée
        box.classList.add('active');
    });
});

window.addEventListener('load', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const boxes = document.querySelectorAll('.box-carrousel');

    // Rendre le conteneur visible après le chargement de la page
    carouselContainer.style.opacity = '1';

    // Transition pour chaque box
    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, index * 200); // Décalage de 200ms entre les box
    });
});