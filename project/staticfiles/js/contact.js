
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const modal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close-btn');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche le rechargement de la page

        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            headers: {
                'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
            },
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                modal.style.display = "block";
                form.reset(); // Réinitialise le formulaire
            } else {
                // Gérer les erreurs si nécessaire
            }
        })
        .catch(error => console.error('Erreur:', error));
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

