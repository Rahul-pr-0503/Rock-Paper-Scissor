
// Initialize playlist and current song index
let playlist = [];
let currentSongIndex = -1;

// Function to add song to playlist
function addSong(title, artist, genre) {
    const song = { title, artist, genre };
    playlist.push(song);
    updatePlaylistUI();
}

// Function to play next song
function playNext() 
{
    if (currentSongIndex < playlist.length - 1) {
        currentSongIndex++;
        updateCurrentSongUI();
    }
}

// Function to play previous song
function playPrevious() {
    if (currentSongIndex > 0) {
        currentSongIndex--;
        updateCurrentSongUI();
    }
}

// Function to filter songs by genre
function filterByGenre(genre) {
    const filteredPlaylist = playlist.filter(song => song.genre === genre);
    updatePlaylistUI(filteredPlaylist);
}

// Function to update playlist UI
function updatePlaylistUI(filteredPlaylist = playlist) {
    const playlistElement = document.getElementById('playlist');
    playlistElement.innerHTML = '';
    filteredPlaylist.forEach(song => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist} (${song.genre})`;
        playlistElement.appendChild(li);
    });
}

// Function to update current song UI
function updateCurrentSongUI() {
    const currentSongElement = document.getElementById('current-song');
    if (currentSongIndex >= 0 && currentSongIndex < playlist.length) {
        currentSongElement.textContent = `${playlist[currentSongIndex].title} - ${playlist[currentSongIndex].artist}`;
    } else {
        currentSongElement.textContent = '';
    }
}

// Event listeners
document.getElementById('add-song-btn').addEventListener('click', () => {
    const title = prompt('Enter song title:');
    const artist = prompt('Enter song artist:');
    const genre = prompt('Enter song genre:');
    addSong(title, artist, genre);
});

document.getElementById('play-next-btn').addEventListener('click', playNext);
document.getElementById('play-previous-btn').addEventListener('click', playPrevious);

document.getElementById('genre-select').addEventListener('change', event => {
    const selectedGenre = event.target.value;
    if (selectedGenre === 'All') {
        updatePlaylistUI();
    } else {
        filterByGenre(selectedGenre);
    }
});

// Initialize playlist with sample data
addSong('Song 1', 'Artist 1', 'Rock');
addSong('Song 2', 'Artist 2', 'Pop');
playNext(); // Start with first song
