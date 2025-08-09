function launchInk() {

// Désactiver le bouton pour éviter d'autres clics
  const btn = document.querySelector('button');
  btn.disabled = true;
  btn.style.opacity = 0.5;

  // Attendre la fin de l'effet encre avant de rediriger

    window.location.href = 'activity.html'; // <-- Change vers ta vraie page
  }


  document.getElementById('gal').addEventListener('click', () => {
    window.location.href = 'gallery.html';
});
