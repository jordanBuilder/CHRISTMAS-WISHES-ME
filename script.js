const centerMessage = document.querySelector(".center-message");
const canvas = document.querySelector("#confetti");
const songsToolTip = document.querySelector(".songs-tooltip");
const songIcon = document.querySelector(".fa-music");


const text =
  "LE COMITE DE CLASSE AINSI QUE CHAQUE MEMBRE DE LA GLSI-A VOUS SOUHAITE CHALEUREUSEMENT DE BELLES FETES DE FIN D'ANNEE 🎉🎉✌";

const music = new Audio();

const songs = [
  {
    path: "./public/songs/Boney M. - Oh Come All Ye Faithful (Official Audio).mp3",
    displayName: "O Come All Ye Faithful",
    cover: "./public/images/songOne_bg.jpg",
    artist: "Boney M",
    text: "Réunissons-nous avec foi et amour pour célébrer la joie des fêtes !",
  },
  {
    path: "./public/songs/The First Noel - Boney M (with Lyrics).mp3",
    displayName: "The First Noel",
    cover: "./public/images/songTwo_bg.jpg",
    artist: "BONE M",
    text: "Que cette saison vous apporte la lumière et la paix du tout premier Noël !",
  },
  {
    path: "./public/songs/Boney M. - Joy to the World (Official Audio).mp3",
    displayName: "Joy To The World",
    cover: "./public/images/songThree_bg.jpg",
    artist: "Boney M",
    text: "Apportons la joie au monde entier et partageons l'esprit de cette merveilleuse période de l'année !",
  },
  {
    path: "./public/songs/Mariah Carey - O Holy Night (Official Audio).mp3",
    displayName: "O Holy Night",
    cover: "./public/images/songFour_bg.jpg",
    artist: "Boney M",
    text: "En cette nuit sacrée, que vos cœurs soient remplis de gratitude et de magie festive !",
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
    });
  });
})

