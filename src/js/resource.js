const resourceFilters = document.querySelectorAll(".resource__checkbox") !== null ? document.querySelectorAll(".resource__checkbox") : false;
const resources = document.querySelectorAll("[data-filters]") !== null ? document.querySelectorAll("[data-filters]") : false;
const clear = document.getElementById("clear") !== null ? document.getElementById("clear") : false;
if ( resources ) {
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

if ( clear ) {
  clear.addEventListener("click", (event) => {
    event.preventDefault();
    clearFilter();
  });
}
