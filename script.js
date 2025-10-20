document.addEventListener('DOMContentLoaded', () => {
    
    // Animazione per la galleria allo scroll
    const galleryItems = document.querySelectorAll('.gallery-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // L'animazione parte quando il 10% dell'elemento è visibile
    });

    galleryItems.forEach(item => {
        observer.observe(item);
    });

});