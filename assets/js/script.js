
const target = document.querySelectorAll('[data-animacao');
const animationClass = 'animate';

function animacaoScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } 
    })
}

animacaoScroll();

if(target.length){ 
    window.addEventListener('scroll', function() {
        animacaoScroll();
    })
}