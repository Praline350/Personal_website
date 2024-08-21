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


const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active');
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * (100 / images.length);
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}