/* I will try to explain it as well as I can with my skill, it's not mine but a combination of gpt, copilot https://stackoverflow.com/questions/18274061/html-5-audio-tag-multiple-files https://www.w3schools.com/html/html5_audio.asp*/
const tracks1 = [
  { src: "../Page4/music/Aerials.mp3", title: "Aerials - System of a Down" },
  { src: "../Page4/music/Toxicity.mp3", title: "Toxicity - System of a Down" }
]; /* we make a variable and attach src "music locations" to it like in html but weirder
and add a seperate title so its easier to show the current song playing */

let index1 = 0;
const audio1 = document.getElementById("player_1");
const nowPlaying1 = document.getElementById("nowPlaying1");

/*Make variables and match them to the html code and tell the index to take the first item from the list */

audio1.src = tracks1[index1].src;
nowPlaying1.textContent = "Now playing: " + tracks1[index1].title;


/* audio1s src corresponds to variable tracks1s index1s src
The ID nowPlaying1s text is now playing and the tracks1s index1s current title (i put it here so that when first song plays it shots, i was too lazy to fix it)  */
audio1.addEventListener("ended", () => {
  index1 = (index1 + 1) % tracks1.length;
  audio1.src = tracks1[index1].src;
  nowPlaying1.textContent = "Now playing: " + tracks1[index1].title;
  audio1.play();
});
/*when audio1 ends index1 is same as index1 + 1 so it takes the next in queue (had to google this but % tracks1.lenght; basicly tells the index how many tracks are left in queue)
we refresh the audio1.src to the new index1.src for it to play next song
then we have the nowplaying again which just tells our nowplaying1 element the name of the track and updates it
and last plays the audio*/

const tracks2 = [
  { src: "../Page4/music/Kickstarts.mp3", title: "Example - Kickstarts (Bar 9 Remix)" },
  { src: "../Page4/music/Discover Life.mp3", title: "Discover Life - Uppermost" }
];

let index2 = 0;
const audio2 = document.getElementById("player_2");
const nowPlaying2 = document.getElementById("nowPlaying2");

audio2.src = tracks2[index2].src;
nowPlaying2.textContent = "Now playing: " + tracks2[index2].title;

audio2.addEventListener("ended", () => {
  index2 = (index2 + 1) % tracks2.length;
  audio2.src = tracks2[index2].src;
  nowPlaying2.textContent = "Now playing: " + tracks2[index2].title;
  audio2.play();
});

const tracks3 = [
  { src: "../Page4/music/if not winter.mp3", title: "if not winter - Wisp" },
  { src: "../Page4/music/Lone Wolf Hysteria.mp3", title: "Lone Wolf Hysteria - $uicideboy$" },
  { src: "../Page4/music/Deathwish.mp3", title: "Deathwish - akikura" },
  { src: "../Page4/music/Ghosts.mp3", title: "Ghosts - Anizyz" },
  
];

let index3 = 0;
const audio3 = document.getElementById("player_3");
const nowPlaying3 = document.getElementById("nowPlaying3");

audio3.src = tracks3[index3].src;
nowPlaying3.textContent = "Now playing: " + tracks3[index3].title;

audio3.addEventListener("ended", () => {
    document.body.classList.remove("player1", "player2");
    document.body.classList.add("player3");
  index3 = (index3 + 1) % tracks3.length;
  audio3.src = tracks3[index3].src;
  nowPlaying3.textContent = "Now playing: " + tracks3[index3].title;
  audio3.play();
});