document.addEventListener("DOMContentLoaded", () => {
    
    // --- Gestió del Formulari de Contacte ---
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Evitem que el formulari s'enviï realment i recarregui la pàgina
            event.preventDefault();

            // Recollim les dades
            const formData = new FormData(contactForm);
            const nom = formData.get("nom");
            const privacyAccept = formData.get("privacyConsent");

            if (!privacyAccept) {
                alert("Per favor, accepta la política de privacitat abans d'enviar el missatge.");
                return;
            }

            // Simulem l'enviament mostrant un missatge d'èxit corporatiu
            alert(`Gràcies, ${nom}. La teva consulta s'ha enviat correctament a FoodLogístic S.A. Ens posarem en contacte amb tu ben aviat per gestionar la teva distribució alimentària.`);

            // Netegem el formulari
            contactForm.reset();
        });
    }

    // --- Gestió del Banner de Cookies ---
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptCookiesBtn = document.getElementById("acceptCookies");
    const rejectCookiesBtn = document.getElementById("rejectCookies");

    // Funció per amagar el banner
    const hideCookieBanner = () => {
        cookieBanner.classList.add("hidden");
        // Donem temps a l'animació i després amaguem per l'accessibilitat
        setTimeout(() => {
            cookieBanner.style.display = "none";
        }, 500); 
    }

    // Comprovem si l'usuari ha interactuat abans
    const checkCookieConsent = () => {
        if (!localStorage.getItem("cookieConsent")) {
            // Mostrem el banner si no hi ha interacció prèvia
            // Assegurem que l'accessibilitat sigui correcta abans de treure el hidden
            cookieBanner.style.display = "block";
            // Petit delay per a l'animació inicial (no necessari si usem hidden/display)
             setTimeout(() => {
                cookieBanner.classList.remove("hidden");
            }, 50);
        } else {
            // Amaguem el banner per display: none per accessibilitat
            cookieBanner.style.display = "none";
        }
    }

    checkCookieConsent();

    acceptCookiesBtn.addEventListener("click", () => {
        // Guardem preferència d'acceptació
        localStorage.setItem("cookieConsent", "accepted");
        hideCookieBanner();
        // Aquí s'activaria l'analítica respectuosa real (com el comptador invisible real de StatCounter)
        // activariemRealStatCounter();
    });

    rejectCookiesBtn.addEventListener("click", () => {
        // Guardem preferència de rebutj, l'analítica no s'executaria o ho faria parcialment
        localStorage.setItem("cookieConsent", "rejected");
        hideCookieBanner();
    });

    // --- Efecte de desplaçament suau (smooth scroll) per als enllaços del menú ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});