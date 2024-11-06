document.addEventListener('DOMContentLoaded', function(){
    const emailElement = document.getElementById("email-text");

    emailElement.addEventListener('click', function(){
        const email = emailElement.textContent;
        navigator.clipboard.writeText(email)
        .then(() => {
            alert("L'email a été copié dans le presse-papiers !");
        })
        .catch(err => {
            console.error("Erreur lors de la copie :", err);
        });
    })


})