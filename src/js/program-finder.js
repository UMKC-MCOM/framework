import { loadScript } from './load-script.js';
// Change the view.
const viewButtons = document.querySelectorAll("button[data-view]").length > 0 ? document.querySelectorAll('button[data-view]') : false;
if ( viewButtons ) {
  const listArea = document.querySelector("#listArea");
  viewButtons.forEach( (btn) => {
    btn.addEventListener("click", function(e){
      e.preventDefault();
      let parent = btn.closest("div");
      let activeButton = parent.querySelector(".active");
      activeButton.classList.remove("active");
      btn.classList.add('active');
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
  };
}

// Sticky Header navigation and form activation
const navigation = document.querySelector(".main-navigation--pfinder") ? document.querySelector(".main-navigation--pfinder") : false;
const overview = document.querySelector(".overview") ? document.querySelector(".overview") : false;
const classToAdd = "is-sticky";
// Form details
const formWrapper = document.querySelector(".pf-request_info") ? document.querySelector(".pf-request_info") : false;
if ( formWrapper ) {
  const form = formWrapper.querySelector("div[id]");
  const formId = form.getAttribute('id');
  const reqInfoButtons = document.querySelectorAll("a[href='#request-info']");
  const formQuery = form.dataset.slatequery != "" ? form.dataset.slatequery : '' ;
  loadScript(`https://futureroo.umkc.edu/register/?id=e715abf2-f054-4194-8b63-85873a957361&output=embed&div=${formId}${formQuery}` + ((location.search.length > 1) ? '&' + location.search.substring(1) : ''), false, loadForm(formWrapper));
}

function createMenu(){
  if ( navigation && overview ){
    let ovPos = overview.getBoundingClientRect();
    window.addEventListener('scroll', debounce(function(){
      const verticalScrollPosition = window.pageYOffset;
      if ( verticalScrollPosition > ( ovPos.y + 360 ) ) {
        navigation.classList.add(classToAdd);
      } else {
        navigation.classList.remove(classToAdd);
      }
    }, 10));

    const navlinks = navigation.querySelectorAll("a");
    navlinks.forEach( (link) => {
      link.addEventListener('click', (item) => {
        let status = navigation.getAttribute("aria-hidden");
        setTimeout(function(){
          if ( status == 'false' ){
            document.querySelector(`[data-toggle="#main-navigation"]`).click();
          }
        }, 150);
      });
    });
  }
}

function loadForm(formWrapper){
  setTimeout(function(){
    let formPos = formWrapper.getBoundingClientRect();
    createMenu();
  }, 1000);
}
