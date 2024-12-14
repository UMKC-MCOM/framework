// Change the view.
const viewButtons = document.querySelectorAll(".filter-views__buttons button").length > 0 ? document.querySelectorAll('.filter-views__buttons button') : false;
if ( viewButtons ) {
  const listArea = document.querySelector("#listArea");
  viewButtons.forEach( (btn) => {
    btn.addEventListener("click", function(e){
      e.preventDefault();
      if ( btn.getAttribute("data-view") == "grid" ) {
        if ( listArea.classList.contains("results__list--listing") ){
          listArea.classList.remove("results__list--listing")
        }
      } else {
        if ( !listArea.classList.contains("results__list--listing") ){
          listArea.classList.add("results__list--listing")
        }
      }
    });
  });
}
