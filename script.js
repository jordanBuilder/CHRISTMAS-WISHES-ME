const centerMessage = document.querySelector(".center-message");
const canvas = document.querySelector("#confetti");
const songsToolTip = document.querySelector(".songs-tooltip");
const songIcon = document.querySelector(".fa-music");


const text =
  "NOUS SOUHAITONS UN JOYEUX NOEL AINSI QUE DE BELLES FETES DE FIN D'ANNEE A LA COMMUNAUTE DEV DU TOGO 🎉🎉✌";

const music = new Audio();

const songs = [
  {
    path: "./public/songs/Boney M. - Oh Come All Ye Faithful (Official Audio).mp3",
    displayName: "O Come All Ye Faithful",
    cover: "./public/images/songOne_bg.jpg",
    artist: "Boney M",
  },
  {
    path: "./public/songs/The First Noel - Boney M (with Lyrics).mp3",
    displayName: "The First Noel",
    cover: "./public/images/songTwo_bg.jpg",
    artist: "BONE M",
  },
  {
    path: "./public/songs/Boney M. - Joy to the World (Official Audio).mp3",
    displayName: "Joy To The World",
    cover: "./public/images/songThree_bg.jpg",
    artist: "Boney M",
  },
  {
    path: "./public/songs/Mariah Carey - O Holy Night (Official Audio).mp3",
    displayName: "O Holy Night",
    cover: "./public/images/songFour_bg.jpg",
    artist: "Boney M",
  },
];

for (let i = 0; i < songs.length; i++) {
  const songDisplayNameTag = document.createElement("p");
  songDisplayNameTag.textContent = songs[i].displayName;
  songDisplayNameTag.classList.add(`song${i + 1}`);
  songsToolTip.appendChild(songDisplayNameTag);
}

function textTypingEffect(element, text, charIndex = 0) {
  if (charIndex === 0) {
    element.textContent = "";
  }
  element.textContent += text[charIndex];
  if (charIndex === text.length - 1) {
    return;
  }
  setTimeout(() => textTypingEffect(element, text, charIndex + 1), 50);
}

songIcon.addEventListener("click", () => {
  songsToolTip.classList.toggle("appear");
});

textTypingEffect(centerMessage, text);

let musicIndex = 0;
let isPlaying = false;

function playMusic() {
  isPlaying = true;
  music.play();
}

function loadMusic(song) {
  music.src = song.path;
  document.body.style.backgroundImage = `url(${song.cover})`;
}

function changeMusic(musicIndex) {
  loadMusic(songs[musicIndex]);
  playMusic();
}
document.addEventListener('DOMContentLoaded', () => {
  const songOne = document.querySelector(".song1");
  const songTwo = document.querySelector(".song2");
  const songThree = document.querySelector(".song3");
  const songFour = document.querySelector(".song4");

  const songsGroup = [songOne, songTwo, songThree, songFour];
  songsGroup.forEach((song, index) => {
    song.addEventListener("click", () => {
      songsGroup.forEach((item) => item.classList.remove("playing"));
      musicIndex = index;
      changeMusic(musicIndex);
      song.classList.add("playing");
      songsToolTip.classList.remove("appear");
    });
  });
})

