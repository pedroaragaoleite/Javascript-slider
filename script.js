let indice = 1;

showSlides(indice);

function nextSlide(n) {
    showSlides(indice +=n);
}

function positionSlide(n) {
    showSlides(indice=n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('my_slide');
    let bars = document.getElementsByClassName('bar');

    if(n > slides.length) {
        indice = 1;
    }

    if( n < 1) {
        indice = slides.length();
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for(i = 0; i < bars.length; i++) {
        bars[i].className = bars[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = "block";
    bars[indice-1].className += " active";
}


