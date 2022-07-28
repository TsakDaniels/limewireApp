const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

//Song titles


const songs = [
  "Here comes the sun",
  "What's my age again",
  "Hush",
  "Jackass",
  "Hurricane",
  "Black black heart",
];

//document.getElementById("songs").innerHTML = songs;
//document.getElementById("mySidebar").innerHTML = '<li>'+ songs.join('</li><li>') + '</li>'


//keep track of songs
let songIndex = 0;

//initially load song info dom
loadSong(songs[songIndex]);

//update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `${song}.mp3`;
  cover.src = `${song}.jpg`;
}


$("#title").css("color", "rgb(100,100,100)");

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex == songs.length) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playSong();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//event listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

//Change song events
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);

nav = false;

function openNav() {
  if ($(window).width() > 900) {
    if (nav == false) {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "0px";
      nav = true;
    } else {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      nav = false;
    }
  } else {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0";
    nav = false;
  }
}


function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

let dm = false;

function lightMode() {
  if (dm === false) {
    $("body").css("background-color", "rgba(156, 255, 57, 0.600)");
    $(".sidebar").css("background-color", "rgba(136, 222, 102, 0.66)");
    
    $(".music-container").css("background-color", "rgb(161, 255, 155)");
    $(".neonText").css("color", "white");
    $("#userDetails").css("background-color", " #ccffbc");
    $("#userDetails").css("border", "none");
    $("#userDetails").css("color", "rgb(55, 206, 55)");
    document.getElementById("btntext").innerHTML = "Dark Mode";
    dm = true;
  } else {
    $("body").css("background-color", "#141414");
    $(".sidebar").css("background-color", "rgba(90, 90, 90, 0.203)");
    $(".music-container").css("background-color", "rgba(134, 228, 106, 0.839)");
    $(".neonText").css("color", "rgb(23, 79, 20)");
    $("#userDetails").css("background-color", "#282828");
    $("#userDetails").css("color", "rgb(55, 206, 55)");
    document.getElementById("btntext").innerHTML = "Light Mode";
    dm = false;
  }
}

//VOLUME CHANGE
let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function (e) {
  audio.volume = e.currentTarget.value / 100;
});



//SEARCHBAR
function searchbar() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("mySidebar");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}