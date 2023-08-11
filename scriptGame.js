let menu = document.querySelector('.menu');
let cont = 0;


function iniciar() {
    //Selecciono las imágenes
    var images = document.querySelectorAll('#boxImagenes img');
    soltar1 = document.getElementById('boxdrop1');
    soltar2 = document.getElementById('boxdrop2');
    soltar3 = document.getElementById('boxdrop3');
    //Funciones de arrastrado
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('dragstart', arrastrado, false);
    }

    soltar1.addEventListener('dragenter', function (e) { 
        e.preventDefault();
    }, false);

    soltar1.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltar1.addEventListener('drop', soltado, false);


    soltar2.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    soltar2.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltar2.addEventListener('drop', soltado, false);


    soltar3.addEventListener('dragenter', function (e) {
        e.preventDefault();
    }, false);
    soltar3.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);
    soltar3.addEventListener('drop', soltado, false);

}

function arrastrado(e) {
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}
//Soltado
async function soltado(e) {
    e.preventDefault();
    console.log(e);
    let id = e.dataTransfer.getData('Text');
    let image = document.getElementById(id);

    if(image){
        image.style.display = 'none';
        e.target.innerHTML = '<img src="' + image.src + '" height="400px" width="275px">';
        cont++;
    }
}
//Al apretar el botón, se reiniciará
function reset(){
    window.location.reload();
}

iniciar();