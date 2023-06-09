// Parse URL parameters
const params = new URLSearchParams(window.location.search);

// Get the "theme" parameter value
const id = params.get('id');

fetch('./appindex.json')
.then(results => results.json)

const appdat = index[id];

document.getElementById('title').textContent = appdat.name;
document.getElementById('description').textContent = appdat.description;
document.getElementById('logs').textContent = appdat.logs;
document.getElementById('banner').style.backgroundImage = `url(${appdat.banner_link})`;
document.getElementById('download_btn').onclick = function() {
    location.href = appdat.download_link;
  };