function updateClock() {
  const clockElement = document.getElementById('clock');
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedHours = String(hours).padStart(2, '0');

  clockElement.textContent = `${formattedHours}:${minutes} ${ampm}`;
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

setInterval(updateClock, 1000);
updateClock();
