import { loadScript } from './load-script.js';
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

function debounce(func, delay) {
  let timer;
  return function(){
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  }
}

// Sticky Header navigation and form activation
const navigation = document.querySelector(".main-navigation--pfinder") ? document.querySelector(".main-navigation--pfinder") : false;
const overview = document.querySelector(".overview") ? document.querySelector(".overview") : false;
const classToAdd = "is-sticky";
// Form details
const formWrapper = document.querySelector(".pf-request_info") ? document.querySelector(".pf-request_info") : false;
const formId = formWrapper.querySelector("div[id]").getAttribute('id');
const reqInfoButtons = document.querySelectorAll("a[href='#request-info']");
var clone = null;

function createMenu(){
  let formClone = document.querySelector(".pf-request_info--copy");
  reqInfoButtons.forEach( (btn) => {
    btn.addEventListener('click', (item) => {
      item.preventDefault();
      formClone.classList.toggle("pf-request_info--copy--active");
    });
  });

  if ( navigation && overview ){
    let ovPos = overview.getBoundingClientRect();
    window.addEventListener('scroll', debounce(function(){
      const verticalScrollPosition = window.pageYOffset;
      if ( verticalScrollPosition > ( ovPos.y + 360 ) ) {
        navigation.classList.add(classToAdd);
      } else {
        navigation.classList.remove(classToAdd);
        formClone.classList.remove('pf-request_info--copy--active');
      }
    }, 50));
  }
}
    loadScript(`https://futureroo.umkc.edu/register/?id=e715abf2-f054-4194-8b63-85873a957361&output=embed&div=${formId}` + ((location.search.length > 1) ? '&' + location.search.substring(1) : ''), false, loadForm(formWrapper));

function loadForm(formWrapper){
  setTimeout(function(){
    clone = formWrapper.cloneNode(true);
    clone.classList.add("pf-request_info--copy");
    let bodyDom = document.querySelector("body");
    bodyDom.appendChild(clone);
    createMenu();
  }, 500);

}
