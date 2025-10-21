document.addEventListener('DOMContentLoaded', () => {
    
    // --- Logica per l'animazione della galleria ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    galleryItems.forEach(item => {
        observer.observe(item);
    });

    // --- LOGICA PER IL POP-UP ITINERARIO ---

    // Dati per ogni destinazione (con Norvegia aggiornata)
    const destinationsData = {
        scozia: {
            title: "Itinerario in Scozia",
            image: "assets/images/scozia.png",
            details: `
                <p><strong>Periodo migliore:</strong> Maggio - Settembre, per godere delle lunghe giornate di luce e del clima mite.</p>
                <p><strong>Città da visitare:</strong> <strong>Edimburgo</strong>, un gioiello medievale ricco di storia e fascino, sarà la nostra base per esplorare.</p>
                <p><strong>L'esperienza speciale:</strong> Un tour di un giorno nelle <strong>Highlands</strong>, tra valli sconfinate, laghi misteriosi come Loch Ness e castelli da favola.</p>
            `
        },
        portogallo: {
            title: "Itinerario in Portogallo",
            image: "assets/images/portogallo.png",
            details: `
                <p><strong>Periodo migliore:</strong> Aprile - Giugno o Settembre - Ottobre, per evitare il caldo estivo e la folla.</p>
                <p><strong>Città da visitare:</strong> <strong>Lisbona</strong>, con i suoi vicoli colorati, i tram storici e la musica malinconica del Fado che risuona nell'aria.</p>
                <p><strong>L'esperienza speciale:</strong> Una gita a <strong>Sintra</strong> per visitare i suoi palazzi fiabeschi, come il Palácio da Pena, immersi in un parco lussureggiante.</p>
            `
        },
        // --- OGGETTO NORVEGIA MODIFICATO ---
        norvegia: {
            title: "Itinerario in Norvegia",
            image: "assets/images/norvegia.png",
            details: `
                <p><strong>Periodo migliore:</strong> Giugno - Agosto, per godere del clima migliore e delle giornate di luce quasi infinite.</p>
                <p><strong>Città da visitare:</strong> <strong>Oslo</strong>, la vivace capitale immersa nel verde, come punto di partenza per la nostra avventura.</p>
                <p><strong>L'esperienza speciale:</strong> Un <strong>viaggio scenografico in treno</strong> verso la regione dei fiordi, attraversando paesaggi spettacolari per ammirare da vicino la loro maestosità.</p>
            `
        }
    };

    // Selezioniamo gli elementi del DOM
    const modal = document.getElementById('itinerary-modal');
    const closeBtn = document.querySelector('.close-btn');
    const ctaButtons = document.querySelectorAll('.cta');
    
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupDetails = document.getElementById('popup-details');

    // Funzione per aprire il pop-up
    const openModal = (destination) => {
        const data = destinationsData[destination];
        if (data) {
            popupImage.src = data.image;
            popupTitle.textContent = data.title;
            popupDetails.innerHTML = data.details;
            modal.style.display = 'block';
        }
    };

    // Funzione per chiudere il pop-up
    const closeModal = () => {
        modal.style.display = 'none';
    };

    // Aggiungiamo gli eventi
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            const destination = button.dataset.destination;
            openModal(destination);
        });
    });

    closeBtn.addEventListener('click', closeModal);

    // Chiude il pop-up anche se si clicca fuori dalla finestra
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
});