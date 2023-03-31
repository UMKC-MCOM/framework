const toggles = document.querySelectorAll('[data-toggle]');
[...toggles].forEach((toggle) => {
  toggle.addEventListener('click', function(e){
    e.preventDefault();
    let parent = toggle.parentNode.closest("div");
    let content = document.querySelector(toggle.dataset.toggle);
    if ( content.getAttribute('aria-hidden') === null || content.getAttribute('aria-hidden') === "true" ) {
      closeOpenToggles(parent);
      toggle.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);
    } else {
      closeOpenToggles(parent);
    }
  })
});

function closeOpenToggles(rootContainer) {
  let openBtn = rootContainer.querySelectorAll('[aria-expanded=true]');
  openBtn.forEach((openBtn) => {
    let content = document.querySelector(openBtn.dataset.toggle);
    openBtn.setAttribute('aria-expanded', false);
    content.setAttribute('aria-hidden', true);
  })
}
