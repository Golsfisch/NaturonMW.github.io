// Sidebar öffnen/schließen
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');

  // Pfeilrichtung ändern
  if (sidebar.classList.contains('open')) {
    toggleBtn.innerHTML = '&#x276E;'; // Pfeil nach links
  } else {
    toggleBtn.innerHTML = '&#x276F;'; // Pfeil nach rechts
  }
});
