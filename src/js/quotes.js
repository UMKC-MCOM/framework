const quoteButtons = document.querySelectorAll("[data-controls]");
const quote = document.querySelectorAll(".quote__item");
[...quoteButtons].forEach((button) => {
  button.addEventListener('click', function(e){
    e.preventDefault();
    // Remove isVisible from all other classes:
    quote.forEach( (item) => {
      item.classList.remove("is-visible");
    });
    quoteButtons.forEach( (item) => {
      item.classList.remove("quote__bullet--active");
    });
    let content = document.querySelector(button.dataset.controls);
    content.classList.add("is-visible");
    button.classList.add("quote__bullet--active");
  });
});
