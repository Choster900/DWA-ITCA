document.getElementById('add-song').addEventListener('click', addSong);
document.getElementById('play-songs').addEventListener('click', playSongs);

let playlist = [];

function addSong() {
    const title = document.getElementById('song-title').value;
    const artist = document.getElementById('song-artist').value;

    if (title && artist) {
        const song = { title, artist };
        playlist.push(song);
        renderPlaylist();
        clearInputs();
    }
}

function removeSong(index) {
    playlist.splice(index, 1);
    renderPlaylist();
}

function renderPlaylist() {
    const songList = document.getElementById('song-list');
    songList.innerHTML = '';
    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${song.title} - ${song.artist} <button onclick="removeSong(${index})">Delete</button>`;
        songList.appendChild(li);
    });
}

function clearInputs() {
    document.getElementById('song-title').value = '';
    document.getElementById('song-artist').value = '';
}

function playSongs() {
    if (playlist.length > 0) {
        alert('Playing songs:\n' + playlist.map(song => `${song.title} by ${song.artist}`).join('\n'));
    } else {
        alert('No songs in the playlist.');
    }
}
