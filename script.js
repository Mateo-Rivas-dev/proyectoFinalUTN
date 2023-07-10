/*--------Video de la pestaña Historia------*/

let video= document.querySelector("video");
let botonPlay= document.querySelector("play");
let botonPause= document.querySelector("pause");


setTimeout(()=>{document.getElementById('showTime').innerHTML=` Duracion video : ${video.duration.toFixed(2)}`},1000);

for (let i = 0; i < video.tim; i++){
    console.log(video.currentTime)
}

playBoton.addEventListener('click',()=>{
    video.play()
});
