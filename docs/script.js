document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Evitem que el formulari s'enviï realment i recarregui la pàgina
            event.preventDefault();

            // Recollim les dades (opcional per si volem mostrar-les per consola)
            const formData = new FormData(contactForm);
            const nom = formData.get("nom");

            // Simulem l'enviament mostrant un missatge d'èxit
            alert(`Gràcies ${nom}. El teu missatge s'ha enviat correctament a FoodLogístic S.A. Ens posarem en contacte amb tu ben aviat.`);

            // Netegem el formulari
            contactForm.reset();
        });
    }

    // Efecte de desplaçament suau (smooth scroll) per als enllaços del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});