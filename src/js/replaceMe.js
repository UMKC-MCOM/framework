setInterval(hpRotator, 2500, 'span[data-show]');

function hpRotator(object){
    const show = document.querySelector(object);
    if ( show === null ) return false;
    const next = show.nextElementSibling || document.querySelector('span:first-child');
    const up = document.querySelector('span[data-up]');
    if ( up ) {
        up.removeAttribute('data-up');
    }
    if ( next ) {
        next.style.cssText = `--height: ${window.getComputedStyle(next).height}`;
    }
    show.removeAttribute('data-show');
    show.setAttribute('data-up', '');
    next.setAttribute('data-show', '');
}
