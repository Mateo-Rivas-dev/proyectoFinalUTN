/*--------Video de la pestaña Historia------*/

document.addEventListener("DOMContentLoaded", function(){
    
    let video = document.getElementById("myVideo");
    let botonPlay = document.getElementById("play");
    let botonPause = document.getElementById("pause");
    let showTimeElement = document.getElementById('showTime');

  video.addEventListener('loadedmetadata', ()=>{    
    let duration = video.duration.toFixed(2);
    showTimeElement.innerHTML = `0:00 / ${formatTime(duration)}`;
  });

  video.addEventListener('timeupdate', ()=>{
    let currentTime = video.currentTime.toFixed(2);
    let duration = video.duration.toFixed(2);
    showTimeElement.innerHTML = `${formatTime(currentTime)} / ${formatTime(duration)}`;
  });

  botonPlay.addEventListener('click', ()=>{
    video.play();
  });

  botonPause.addEventListener('click', ()=>{
    video.pause();
  });

  function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
  }
});

