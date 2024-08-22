window.addEventListener('load', () => {
    const skillLevels = document.querySelectorAll('.skill-level');

    skillLevels.forEach(skillLevel => {
        const level = skillLevel.getAttribute('data-skill-level');
        skillLevel.style.width = '0'; // Réinitialise la largeur

        // Animation progressive
        setTimeout(() => {
            skillLevel.style.transition = 'width 2s ease-in-out';
            skillLevel.style.width = `${level * 10}%`;
        }, 500); // Démarrer après un léger délai
    });
});
