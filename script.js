script.js// Panggil ini untuk mematikan reaksi klik/touch pada daftar lagu
function disablePlaylistClicks(){
  const pl = document.getElementById('playlist');
  if(!pl) return;
  pl.classList.add('playlist-no-click');
  // tandai tiap item untuk aksesibilitas (optional)
  document.querySelectorAll('#playlist .song').forEach(s => s.setAttribute('aria-disabled','true'));
  console.log('Playlist clicks disabled');
}

// Panggil ini untuk mengembalikan reaksi klik/touch
function enablePlaylistClicks(){
  const pl = document.getElementById('playlist');
  if(!pl) return;
  pl.classList.remove('playlist-no-click');
  document.querySelectorAll('#playlist .song').forEach(s => s.removeAttribute('aria-disabled'));
  console.log('Playlist clicks enabled');
}
