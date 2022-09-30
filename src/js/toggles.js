const toggles = document.querySelectorAll('[data-toggle]');
[...toggles].forEach((toggle) => {
  toggle.addEventListener('click', function(e){
    e.preventDefault();
    let content = document.querySelector(toggle.dataset.toggle);
    console.log(content.getAttribute('aria-hidden'));
    if ( content.getAttribute('aria-hidden') === "false" ) {
      toggle.setAttribute('aria-expanded', false);
      content.setAttribute('aria-hidden', true);
    } else {
      toggle.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);
    }
  })
});
