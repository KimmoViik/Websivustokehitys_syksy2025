// ====== TRACKS SETUP ======
const tracks1 = [
  { src: "music/Aerials.mp3", title: "Aerials - System of a Down" },
  { src: "music/Toxicity.mp3", title: "Toxicity - System of a Down" }
];

const tracks2 = [
  { src: "music/Kickstarts.mp3", title: "Example - Kickstarts (Bar 9 Remix)" },
  { src: "music/Discover_Life.mp3", title: "Discover Life - Uppermost" }
];

const tracks3 = [
  { src: "music/if_not_winter.mp3", title: "if not winter - Wisp" },
  { src: "music/Lone_Wolf_Hysteria.mp3", title: "Lone Wolf Hysteria - $uicideboy$" },
  { src: "music/Deathwish.mp3", title: "Deathwish - akikura" },
  { src: "music/Ghosts.mp3", title: "Ghosts - Anizyz" }
];

// ====== PLAYER FUNCTION ======
function setupPlayer(audioId, nowPlayingId, tracks) {
  let index = 0;
  const audio = document.getElementById(audioId);
  const nowPlaying = document.getElementById(nowPlayingId);

  audio.src = tracks[index].src;
  nowPlaying.textContent = "Now playing: " + tracks[index].title;

  audio.addEventListener("ended", () => {
    index = (index + 1) % tracks.length;
    audio.src = tracks[index].src;
    nowPlaying.textContent = "Now playing: " + tracks[index].title;
    audio.play();
  });

  return audio; // return audio in case you need to control it later
}

// ====== INITIALIZE PLAYERS ======
const audio1 = setupPlayer("player_1", "nowPlaying1", tracks1);
const audio2 = setupPlayer("player_2", "nowPlaying2", tracks2);
const audio3 = setupPlayer("player_3", "nowPlaying3", tracks3);

// ====== CAROUSEL CONTROL FOR PLAYER 3 ======
// Only play the third audio when its slide is active
const carousel = document.getElementById('carouselExampleCaptions');
carousel.addEventListener('slid.bs.carousel', function (event) {
  const activeSlide = event.relatedTarget;
  if (activeSlide.querySelector('#player_3')) {
    audio3.play();
  } else {
    audio3.pause();
  }
});
