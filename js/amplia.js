function ampliar(name) {
    var ampliado = document.getElementById('lightbox').className;
    
    if(ampliado == 'lightbox') {
        (document.getElementById('lightbox').className = 'lightbox atv');
        loadimage(name);
        }
    else{ 
        (document.getElementById('lightbox').className = 'lightbox');
    }
}

function loadimage(name){
    var image = document.querySelector("#image-ampliada");
    image.setAttribute('src', name);
}