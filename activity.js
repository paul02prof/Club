
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section');

            function checkScroll() {
                sections.forEach(section => {
                    const sectionTop = section.getBoundingClientRect().top;
                    const sectionHeight = section.offsetHeight;
                    const triggerPoint = window.innerHeight * 0.8; // 20% de la section visible

                    if (sectionTop < triggerPoint && sectionTop > -sectionHeight * 0.8) {
                        section.classList.add('active');
                    } else {
                        // Optionnel: retirer la classe si on veut que l'animation se réinitialise
                        //section.classList.remove('active');
                    }
                });
            }

            // Vérifier au chargement
            checkScroll();

            // Vérifier au scroll
            window.addEventListener('scroll', checkScroll);
        });





