document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. BOTÓN PRINCIPAL (HERO) ---
    const startBtn = document.getElementById("btn-start");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            alert("Explorando los planes de estudio y laboratorios de Mecánica, Electromecánica y Mecatrónica.");
        });
    }

    // --- 2. ESCENA POST-CRÉDITOS: REPRODUCTOR VIDEO HORIZONTAL ---
    const postCreditsBtn = document.getElementById("btn-submit");
    const videoLockScreen = document.getElementById("video-lock-screen");
    const postCreditsVideo = document.getElementById("video-post-creditos");

    if (postCreditsBtn && videoLockScreen && postCreditsVideo) {
        postCreditsBtn.addEventListener("click", () => {
            console.log("Desclasificando registro multimedia histórico MEM_2025.mp4...");
            
            // Desbloqueamos la pantalla del video (efecto desvanecer CSS)
            videoLockScreen.classList.add("unlocked");
            
            // Habilitamos los controles nativos de reproducción
            postCreditsVideo.controls = true;
            
            // Reproducción inmediata del video de celular horizontal
            postCreditsVideo.play()
                .catch(error => {
                    console.log("La reproducción automática requería interacción previa o el archivo no se encuentra:", error);
                });
        });
    }

    // --- 3. ANIMACIÓN SUTIL DE LAS TARJETAS DE ESPECIALIDAD ---
    const cards = document.querySelectorAll(".spec-card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.borderColor = "#8884FF";
        });
        card.addEventListener("mouseleave", () => {
            card.style.borderColor = "rgba(84, 92, 82, 0.3)";
        });
    });

});