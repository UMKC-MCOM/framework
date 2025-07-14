const toggles = document.querySelectorAll('[data-toggle]');
[...toggles].forEach((toggle) => {
  toggle.addEventListener('click', function(e){
    e.preventDefault();
    let parent = toggle.dataset.parent !== undefined ? toggle.dataset.parent : toggle.parentNode.closest("div");
    let content = document.querySelector(toggle.dataset.toggle);
    let focus = ( toggle.dataset.focus !== null ? toggle.dataset.focus : content.focus )
    if ( content.getAttribute('aria-hidden') === null || content.getAttribute('aria-hidden') === "true" ) {
      closeOpenToggles(parent);
      toggle.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);
      if ( focus ) {
        let elem = document.querySelector(focus);
        setTimeout(() => {
          elem.focus(true, true);
        }, 3000);
      }
    } else {
      closeOpenToggles(parent);
    }
  })
});

function closeOpenToggles(rootContainer) {
  let root = typeof rootContainer == "object" ? rootContainer : document.querySelector(rootContainer);
  let openBtn = root.querySelectorAll('[aria-expanded=true]');
  openBtn.forEach((openBtn) => {
    let content = document.querySelector(openBtn.dataset.toggle);
    openBtn.setAttribute('aria-expanded', false);
    content.setAttribute('aria-hidden', true);
  })
}
