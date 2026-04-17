document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Gestió del Formulari de Contacte ---
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evitem que recarregui la pàgina

            const formData = new FormData(contactForm);
            const nom = formData.get("nom");
            const privacyAccept = formData.get("privacyConsent");

            if (!privacyAccept) {
                alert("Per favor, accepta la política de privacitat abans d'enviar el missatge.");
                return;
            }

            alert(`Gràcies, ${nom}. La teva consulta s'ha enviat correctament a FoodLogístic S.A.`);
            contactForm.reset();
        });
    }

    // --- 2. Gestió del Banner de Cookies ---
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptCookiesBtn = document.getElementById("acceptCookies");
    const rejectCookiesBtn = document.getElementById("rejectCookies");

    // Comprovem de forma segura que els elements existeixen a l'HTML
    if (cookieBanner && acceptCookiesBtn && rejectCookiesBtn) {
        
        // Mirem si l'usuari ja havia escollit una opció anteriorment
        const consentimentGuardat = localStorage.getItem("cookieConsent");

        if (!consentimentGuardat) {
            // Si és la primera vegada, mostrem el banner
            cookieBanner.style.display = "block";
            // Un petit retard perquè l'animació CSS de pujada funcioni bé
            setTimeout(() => {
                cookieBanner.classList.remove("hidden");
            }, 50);
        } else {
            // Si ja va acceptar/rebutjar abans, l'amaguem completament
            cookieBanner.style.display = "none";
        }

        // Funció per amagar el banner amb animació
        const amagarBanner = () => {
            cookieBanner.classList.add("hidden"); // Activa l'animació de baixar
            setTimeout(() => {
                cookieBanner.style.display = "none"; // L'amaga de la pantalla després de mig segon
            }, 500);
        };

        // Acció en fer clic a "Acceptar totes"
        acceptCookiesBtn.addEventListener("click", () => {
            console.log("Cookies acceptades!"); // Ho veuràs a la consola (F12)
            localStorage.setItem("cookieConsent", "accepted");
            amagarBanner();
            // Aquí s'activaria el codi de StatCounter en la realitat
        });

        // Acció en fer clic a "Rebutjar-ne algunes"
        rejectCookiesBtn.addEventListener("click", () => {
            console.log("Cookies rebutjades!"); // Ho veuràs a la consola (F12)
            localStorage.setItem("cookieConsent", "rejected");
            amagarBanner();
        });

    } else {
        console.error("AVÍS: No s'han trobat els botons o el banner de cookies a l'HTML. Revisa els IDs.");
    }

    // --- 3. Efecte de desplaçament suau (smooth scroll) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});