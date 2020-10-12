const play = document.getElementById('play');
const music = document.querySelector('audio');
const img = document.querySelector('img');
const next = document.getElementById('next');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');

// we need to change the songs also while clicking next and prev button
// creating the arrray of the objects
const songs = [
    {
        image : 'images2',
        s_name: 'music2',
        title: 'SHABAD 1',
        artist: 'Radha Soamiji',
    },
    {
        image : 'images3',
        s_name: 'music3',
        title: ' SHABAD 2',
        artist: 'Radha Soamiji',
    },
    {
        image : 'images4',
        s_name: 'music4',
        title: 'SHABAD 3',
        artist: 'Radha Soamiji',
    },
    {
        image : 'images5',
        s_name: 'music5',
        title: 'SHABAD 4',
        artist: 'Radha Soamiji',
    },
    {
        image : 'images6',
        s_name: 'music6',
        title: 'SHABAD 5',
        artist: 'Radha Soamiji',
    },
    {
        image : 'images7',
        s_name: 'music7',
        title: 'SHABAD 6',
        artist: 'Radha Soamiji',
    },
    {
        image : 'images8',
        s_name: 'music8',
        title: 'SHABAD 7',
        artist: 'Radha Soamiji',
    },
    {
        image : 'images9',
        s_name: 'music9',
        title: 'SHABAD 8',
        artist: 'Radha Soamiji',
    }
]

// for playing the music on clicking the play button and pausing the music on clicking a button
let isPlaying = false;

// for playing the music
const playmusic = () =>{
    isPlaying = true;
    music.play();
    //from play to pause
    play.classList.replace('fa-play' , 'fa-pause');
    img.classList.add('anime');
};

// for pausing the music
const pausemusic = () =>{
    isPlaying = false;
    music.pause();
    //from pause to play
    play.classList.replace('fa-pause' , 'fa-play');
    img.classList.remove('anime');
};

// event when we click the play button
play.addEventListener('click' , () =>{
    if(!isPlaying){
        playmusic();
    }
    else{
        pausemusic();
    }
});

// changing the music data

const loadSongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = `music/${songs.s_name}.mp3`;
    img.src = `images/${songs.image}.jpg`;
}

loadSongs(songs[0]);

// adding event listener to the next and prev button
let songsIdx = 0;

const nextSong = () =>{
    songsIdx = (songsIdx + 1) % songs.length;
    loadSongs(songs[songsIdx]);
}

const prevSong = () =>{
    songsIdx = (songs.length + songsIdx - 1) % songs.length;
    loadSongs(songs[songsIdx]);
}

next.addEventListener('click' , nextSong);
prev.addEventListener('click' , prevSong);
 
