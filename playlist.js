//testing poor way
let x1 = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;
let x5 = 0;
let x6 = 0;

function hereComesTheSun() {
  if (x1 === 0) {
    loadSong(songs[0]);
    playSong();
    x1 = 1;
  } else {
    pauseSong();
    x1 = 0;
  }
  x2 = 0;
  x3 = 0;
  x4 = 0;
  x5 = 0;
  x6 = 0;
}

 function whatsMyAgeAgain() {
  if (x2 === 0) {
    loadSong(songs[1]);
    playSong();
    x2 = 1;
  } else {
    pauseSong();
    x2 = 0;
  }
  x1 = 0;
  x3 = 0;
  x4 = 0;
  x5 = 0;
  x6 = 0;
}

 function hush() {
  if (x3 === 0) {
    loadSong(songs[2]);
    playSong();
    x3 = 1;
  } else {
    pauseSong();
    x3 = 0;
  }
  x1 = 0;
  x2 = 0;
  x4 = 0;
  x5 = 0;
  x6 = 0;
}


function jackass() {
    if (x4 === 0) {
      loadSong(songs[3]);
      playSong();
      x4 = 1;
    } else {
      pauseSong();
      x4 = 0;
    }
    x1 = 0;
    x2 = 0;
    x3 = 0;
    x5 = 0;
    x6 = 0;
  }


  function hurricane() {
    if (x5 === 0) {
      loadSong(songs[4]);
      playSong();
      x5 = 1;
    } else {
      pauseSong();
      x5 = 0;
    }
    x1 = 0;
    x2 = 0;
    x3 = 0;
    x4 = 0;
    x6 = 0;
  }


  function blackBlackHeart() {
    if (x6 === 0) {
      loadSong(songs[5]);
      playSong();
      x6 = 1;
    } else {
      pauseSong();
      x6 = 0;
    }
    x1 = 0;
    x2 = 0;
    x3 = 0;
    x4 = 0;
    x5 = 0;
  } 
