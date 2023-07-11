const resourceFilters = document.querySelectorAll(".resource__checkbox");
const resources = document.querySelectorAll("[data-filters]");
const clear = document.getElementById("clear");
if ( resources !== null ) {
  resourceFilters.forEach((item) => {
    item.addEventListener("change", (event) => {
      let filters = document.querySelectorAll(".resource__checkbox:checked");
      filterList(filters);
      if ( filters.length == 0 ){ clearFilter(); }
    });
  });
}

function filterList(filterValues) {
  let filters = [];
  [...filterValues].forEach((el) => {
    filters.push(el.dataset.filter);
  });
  [...resources].forEach((el) => {
    let filterList = el.dataset.filters;
    if (contains(filterList, filters)) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });
}

function contains(target, pattern){
  return pattern.every( item => target.includes(item) );
}

function clearFilter() {
  [...resourceFilters].forEach((el) => {
    el.checked = false;
  });
  [...resources].forEach((el) => {
    el.classList.remove("hidden");
  });
}

if ( clear !== null ) {
  clear.addEventListener("click", (event) => {
    event.preventDefault();
    clearFilter();
  });
}
